import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { ThemeProvider } from "better-themes/rsc";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
});
export const metadata: Metadata = {
	metadataBase: new URL("https://fumadocs-better-themes.netlify.app"),
	title: "Better Themes | Fumadocs",
	description: "A theme provider for React",
	keywords: [
		"theme",
		"theme-provider",
		"react",
		"nextjs",
		"fumadocs",
		"react-themes",
		"ssr",
		"dark-mode",
		"light-mode",
		"better-themes example",
	],
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	openGraph: {
		type: "website",
		url: "https://fumadocs-better-themes.netlify.app",
		title: "Better Themes | Fumadocs",
		description: "A theme provider for React",
		siteName: "Better Themes | Fumadocs",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Better Themes | Fumadocs - A theme provider for React",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Better Themes | Fumadocs",
		description: "A theme provider for React",
		images: ["/og-image.png"],
	},
};
export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<ThemeProvider attribute="class" disableTransitionOnChange>
					<RootProvider theme={{ enabled: false }}>{children}</RootProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
