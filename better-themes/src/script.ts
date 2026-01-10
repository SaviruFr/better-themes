import type { Attribute, ValueObject } from "./types";

export const script = (
	attribute: Attribute | Attribute[],
	storageKey: string,
	defaultTheme: string,
	forcedTheme: string | undefined,
	themes: string[],
	value: ValueObject | undefined,
	enableSystem: boolean,
	enableColorScheme: boolean,
) => {
	const el = document.documentElement;
	const systemThemes = ["light", "dark"];
	const attributes = Array.isArray(attribute) ? attribute : [attribute];
	const attrValues = value ? Object.values(value) : themes;

	function applyClassAttr(name: string | undefined) {
		el.classList.remove(...attrValues);
		if (name) {
			el.classList.add(name);
		}
	}

	function applyDataAttr(attr: string, name: string | undefined) {
		if (name) {
			el.setAttribute(attr, name);
		} else {
			el.removeAttribute(attr);
		}
	}

	function updateDOM(theme: string) {
		const name = value ? value[theme] : theme;

		for (const attr of attributes) {
			if (attr === "class") {
				applyClassAttr(name);
			} else if (attr.startsWith("data-")) {
				applyDataAttr(attr, name);
			}
		}

		setColorScheme(theme);
	}

	function setColorScheme(theme: string) {
		if (!enableColorScheme) {
			return;
		}

		const fallback = systemThemes.includes(defaultTheme) ? defaultTheme : null;
		const colorScheme = systemThemes.includes(theme) ? theme : fallback;
		el.style.colorScheme = colorScheme || "";
	}

	function resolveSystemTheme() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

	if (forcedTheme) {
		const resolvedForcedTheme =
			forcedTheme === "system" && enableSystem
				? resolveSystemTheme()
				: forcedTheme;
		updateDOM(resolvedForcedTheme);
	} else {
		try {
			const themeName = localStorage.getItem(storageKey) || defaultTheme;
			const isSystem = enableSystem && themeName === "system";
			const theme = isSystem ? resolveSystemTheme() : themeName;
			updateDOM(theme);
		} catch {
			// localStorage might not be available
		}
	}
};
