import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "better-themes";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Better Themes | TanStack",
			},
			{
				name: "description",
				content: "A theme provider for React",
			},
			{
				name: "keywords",
				content:
					"theme, theme-provider, react, tanstack, vite, react-themes, ssr, dark-mode, light-mode, better-themes example",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:url",
				content: "https://tanstack-better-themes.netlify.app",
			},
			{
				property: "og:title",
				content: "Better Themes | TanStack",
			},
			{
				property: "og:description",
				content: "A theme provider for React",
			},
			{
				property: "og:site_name",
				content: "Better Themes | TanStack",
			},
			{
				property: "og:image",
				content: "/og-image.png",
			},
			{
				property: "og:image:width",
				content: "1200",
			},
			{
				property: "og:image:height",
				content: "630",
			},
			{
				property: "og:image:alt",
				content: "Better Themes | TanStack - A theme provider for React",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "Better Themes | TanStack",
			},
			{
				name: "twitter:description",
				content: "A theme provider for React",
			},
			{
				name: "twitter:image",
				content: "/og-image.png",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider attribute="class" disableTransitionOnChange>
					{children}
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
