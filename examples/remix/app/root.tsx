import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";
import { ThemeProvider } from "better-themes";
import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{ rel: "icon", href: "/favicon.ico" },
	{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
	{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
	{ rel: "manifest", href: "/site.webmanifest" },
];

export const meta: Route.MetaFunction = () => [
	{ title: "Better Themes | Remix" },
	{ name: "description", content: "A theme provider for React" },
	{
		name: "keywords",
		content:
			"theme, theme-provider, react, remix, vite, react-themes, ssr, dark-mode, light-mode, better-themes example",
	},
	{ property: "og:type", content: "website" },
	{ property: "og:url", content: "https://remix-better-themes.netlify.app" },
	{ property: "og:title", content: "Better Themes | Remix" },
	{ property: "og:description", content: "A theme provider for React" },
	{ property: "og:site_name", content: "Better Themes | Remix" },
	{ property: "og:image", content: "/og-image.png" },
	{ property: "og:image:width", content: "1200" },
	{ property: "og:image:height", content: "630" },
	{
		property: "og:image:alt",
		content: "Better Themes | Remix - A theme provider for React",
	},
	{ name: "twitter:card", content: "summary_large_image" },
	{ name: "twitter:title", content: "Better Themes | Remix" },
	{ name: "twitter:description", content: "A theme provider for React" },
	{ name: "twitter:image", content: "/og-image.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<ThemeProvider attribute="class" disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
