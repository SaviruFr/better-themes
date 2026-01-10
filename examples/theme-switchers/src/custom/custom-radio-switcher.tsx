"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "better-themes";
import { cn } from "@/lib/utils";

const themeOptions = [
	{ value: "dark", icon: Moon, label: "Dark" },
	{ value: "light", icon: Sun, label: "Light" },
	{ value: "system", icon: Monitor, label: "System" },
];

export function CustomThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="flex items-center gap-2">
			<div className="flex bg-muted p-1 rounded-full border border-border">
				{themeOptions.map(({ value, icon: Icon, label }) => (
					<button
						type="button"
						key={value}
						onClick={() => setTheme(value)}
						className={cn(
							"flex items-center justify-center p-1.5 rounded-full cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
							theme === value
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground",
						)}
						title={label}
						aria-label={label}
						aria-pressed={theme === value}
					>
						<Icon fill="currentColor" className="w-3.5 h-3.5" />
						<span className="sr-only">{label}</span>
					</button>
				))}
			</div>
		</div>
	);
}
