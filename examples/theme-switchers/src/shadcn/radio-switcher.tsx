"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "better-themes";
import { cn } from "@/lib/utils";
import { Label } from "@/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shadcn/ui/radio-group";

const themeOptions = [
	{ value: "dark", icon: Moon, label: "Dark" },
	{ value: "light", icon: Sun, label: "Light" },
	{ value: "system", icon: Monitor, label: "System" },
];

export function RadioSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<RadioGroup
			defaultValue={mounted ? theme : undefined}
			onValueChange={mounted ? (value) => setTheme(value) : undefined}
			className="flex items-center gap-2"
		>
			<div className="flex bg-muted p-1 rounded-full border border-border">
				{themeOptions.map(({ value, icon: Icon, label }) => (
					<Label
						key={value}
						htmlFor={value}
						className={cn(
							"flex items-center justify-center p-1.5 rounded-full cursor-pointer transition-colors",
							mounted && theme === value
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						<RadioGroupItem value={value} id={value} className="sr-only" />
						<Icon fill="currentColor" className="w-3.5 h-3.5" />
						<span className="sr-only">{label}</span>
					</Label>
				))}
			</div>
		</RadioGroup>
	);
}
