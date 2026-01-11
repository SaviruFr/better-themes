import { useHydrated } from "@tanstack/react-router";
import { useTheme } from "better-themes/rsc";
import { Monitor, Moon, Sun } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const themeOptions = [
	{ value: "dark", icon: Moon, label: "Dark" },
	{ value: "light", icon: Sun, label: "Light" },
	{ value: "system", icon: Monitor, label: "System" },
];

interface ThemeSwitcherProps {
	size?: "sm" | "lg";
}

export function ThemeSwitcher({ size = "sm" }: ThemeSwitcherProps) {
	const { theme, setTheme } = useTheme();
	const hydrated = useHydrated();

	const sizeClasses = {
		sm: {
			container: "gap-2",
			wrapper: "p-1",
			button: "p-1.5",
			icon: "w-3.5 h-3.5",
			radioGroup: "",
		},
		lg: {
			container: "h-14",
			wrapper: "p-2",
			button: "p-2",
			icon: "w-6 h-6",
			radioGroup: "",
		},
	};

	const classes = sizeClasses[size];

	return (
		<RadioGroup
			value={hydrated && theme ? theme : ""}
			onValueChange={(value: string) => setTheme(value)}
			className={cn("flex items-center", classes.container)}
		>
			<div
				className={cn(
					"flex bg-muted rounded-full border border-border",
					classes.wrapper,
				)}
			>
				{themeOptions.map(({ value, icon: Icon, label }) => (
					<Label
						key={value}
						htmlFor={value}
						className={cn(
							"flex items-center justify-center rounded-full cursor-pointer transition-colors",
							classes.button,
							hydrated && theme === value
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						<RadioGroupItem value={value} id={value} className="sr-only" />
						<Icon fill="currentColor" className={classes.icon} />
						<span className="sr-only">{label}</span>
					</Label>
				))}
			</div>
		</RadioGroup>
	);
}
