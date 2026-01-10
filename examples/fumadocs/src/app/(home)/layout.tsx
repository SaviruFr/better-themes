import { HomeLayout } from "fumadocs-ui/layouts/home";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<HomeLayout
			themeSwitch={{ component: <ThemeSwitcher /> }}
			{...baseOptions()}
		>
			{children}
		</HomeLayout>
	);
}
