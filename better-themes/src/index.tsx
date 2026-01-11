import {
	createContext,
	memo,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { script } from "./script";
import { createStorageAdapter } from "./storage";
import type { ThemeProviderProps, UseThemeProps } from "./types";

const colorSchemes = ["light", "dark"];
const MEDIA = "(prefers-color-scheme: dark)";
const isServer = typeof window === "undefined";
export const ThemeContext = createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = {
	setTheme: () => {
		/* no-op */
	},
	themes: [],
};

export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

export const ThemeProvider = (props: ThemeProviderProps): ReactNode => {
	const context = useContext(ThemeContext);

	if (context) {
		return props.children;
	}
	return <Theme {...props} />;
};

const defaultThemes = ["light", "dark"];

const Theme = ({
	forcedTheme,
	disableTransitionOnChange = false,
	enableSystem = true,
	enableColorScheme = true,
	storage = "localStorage",
	storageKey = "theme",
	themes = defaultThemes,
	defaultTheme = enableSystem ? "system" : "light",
	attribute = "class",
	value,
	children,
	nonce,
}: ThemeProviderProps) => {
	const storageAdapter = useMemo(
		() => createStorageAdapter(storage),
		[storage],
	);

	const [theme, setThemeState] = useState(() =>
		getTheme(storageKey, defaultTheme, storageAdapter),
	);

	const applyClassAttribute = useCallback(
		(name: string | undefined, attrValues: string[]) => {
			const d = document.documentElement;
			d.classList.remove(...attrValues);
			if (name) {
				d.classList.add(name);
			}
		},
		[],
	);

	const applyDataAttribute = useCallback(
		(attr: string, name: string | undefined) => {
			const d = document.documentElement;
			if (name) {
				d.setAttribute(attr, name);
			} else {
				d.removeAttribute(attr);
			}
		},
		[],
	);

	const applyAttributesToDOM = useCallback(
		(resolved: string) => {
			const attributeList = Array.isArray(attribute) ? attribute : [attribute];
			const attrValues = value ? Object.values(value) : themes;
			const name = value ? value[resolved] : resolved;

			for (const attr of attributeList) {
				if (attr === "class") {
					applyClassAttribute(name, attrValues);
				} else if (attr.startsWith("data-")) {
					applyDataAttribute(attr, name);
				}
			}
		},
		[attribute, themes, value, applyClassAttribute, applyDataAttribute],
	);

	const applyColorScheme = useCallback(
		(resolved: string) => {
			if (!enableColorScheme) {
				return;
			}
			const fallback = colorSchemes.includes(defaultTheme)
				? defaultTheme
				: null;
			const colorScheme = colorSchemes.includes(resolved) ? resolved : fallback;
			document.documentElement.style.colorScheme = colorScheme || "";
		},
		[enableColorScheme, defaultTheme],
	);

	const applyTheme = useCallback(
		(nextTheme: string | undefined) => {
			if (!nextTheme) {
				return;
			}

			const resolved =
				nextTheme === "system" && enableSystem ? getSystemTheme() : nextTheme;

			const enable = disableTransitionOnChange ? disableAnimation() : null;

			applyAttributesToDOM(resolved);
			applyColorScheme(resolved);

			enable?.();
		},
		[
			enableSystem,
			disableTransitionOnChange,
			applyAttributesToDOM,
			applyColorScheme,
		],
	);

	const setTheme = useCallback(
		(newValue: React.SetStateAction<string>) => {
			const newTheme =
				typeof newValue === "function" ? newValue(theme ?? "") : newValue;
			setThemeState(newTheme);

			storageAdapter.setItem(storageKey, newTheme);
		},
		[theme, storageKey, storageAdapter],
	);

	const handleMediaQuery = useCallback(
		(_event: MediaQueryListEvent | MediaQueryList) => {
			if (theme === "system" && enableSystem && !forcedTheme) {
				applyTheme("system");
			}
		},
		[applyTheme, enableSystem, forcedTheme, theme],
	);

	useEffect(() => {
		if (isServer) {
			return;
		}

		const media = window.matchMedia(MEDIA);

		// Intentionally use deprecated listener methods to support iOS 13 and older browsers
		media.addListener(handleMediaQuery);
		handleMediaQuery(media);

		return () => media.removeListener(handleMediaQuery);
	}, [handleMediaQuery]);

	useEffect(() => {
		if (isServer) {
			return;
		}

		// For localStorage and sessionStorage
		const handleStorage = (e: StorageEvent) => {
			if (
				e.key !== storageKey ||
				e.storageArea !==
					(storage === "localStorage" ? localStorage : sessionStorage)
			) {
				return;
			}

			const newTheme = e.newValue || defaultTheme;
			setTheme(newTheme);
		};

		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	}, [defaultTheme, setTheme, storageKey, storage]);

	useEffect(() => {
		applyTheme(forcedTheme ?? theme);
	}, [applyTheme, forcedTheme, theme]);

	const providerValue = useMemo(
		() => ({
			theme,
			setTheme,
			forcedTheme,
			themes: enableSystem ? [...themes, "system"] : themes,
			systemTheme: enableSystem
				? (getSystemTheme() as "dark" | "light")
				: undefined,
		}),
		[theme, forcedTheme, enableSystem, themes, setTheme],
	);

	return (
		<ThemeContext.Provider value={providerValue}>
			<ThemeScript
				{...{
					forcedTheme,
					storage,
					storageKey,
					attribute,
					enableSystem,
					enableColorScheme,
					defaultTheme,
					value,
					themes,
					nonce,
				}}
			/>
			{children}
		</ThemeContext.Provider>
	);
};

const ThemeScript = memo(
	({
		forcedTheme,
		storage = "localStorage",
		storageKey,
		attribute,
		enableSystem,
		enableColorScheme,
		defaultTheme,
		value,
		themes,
		nonce,
	}: Omit<ThemeProviderProps, "children"> & { defaultTheme: string }) => {
		const scriptArgs = JSON.stringify([
			attribute,
			storage,
			storageKey,
			defaultTheme,
			forcedTheme,
			themes,
			value,
			enableSystem,
			enableColorScheme,
		]).slice(1, -1);

		return (
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Needed to inject script before hydration
				dangerouslySetInnerHTML={{
					__html: `(${script.toString()})(${scriptArgs})`,
				}}
				nonce={nonce}
				suppressHydrationWarning
			/>
		);
	},
);

const getTheme = (
	key: string,
	fallback?: string,
	storageAdapter?: ReturnType<typeof createStorageAdapter>,
) => {
	if (isServer) {
		return fallback;
	}
	let theme: string | undefined;
	try {
		if (storageAdapter) {
			theme = storageAdapter.getItem(key) || undefined;
		} else {
			// Fallback to localStorage for backward compatibility
			theme = localStorage.getItem(key) || undefined;
		}
	} catch {
		// Storage might not be available
	}
	return theme || fallback;
};

const disableAnimation = () => {
	const css = document.createElement("style");
	css.appendChild(
		document.createTextNode(
			"*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
		),
	);
	document.head.appendChild(css);

	return () => {
		window.getComputedStyle(document.body);

		setTimeout(() => {
			document.head.removeChild(css);
		}, 1);
	};
};

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
	if (isServer) {
		return "light";
	}
	const event = e ?? window.matchMedia(MEDIA);
	const isDark = event.matches;
	const systemTheme = isDark ? "dark" : "light";
	return systemTheme;
};

export type { StorageInterface } from "./storage";
export type { Attribute, ThemeProviderProps, UseThemeProps } from "./types";
