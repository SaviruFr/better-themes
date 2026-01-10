import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { ThemeSwitcher } from "@/_components/theme-switcher";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
	return (
		<DocsLayout
			githubUrl="https://github.com/SaviruFr/better-themes"
			themeSwitch={{
				component: (
					<div className="ml-auto">
						<ThemeSwitcher />
					</div>
				),
			}}
			tree={source.pageTree}
			{...baseOptions()}
		>
			{children}
		</DocsLayout>
	);
}
