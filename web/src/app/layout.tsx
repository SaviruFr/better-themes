import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/_components/provider";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://better-themes.netlify.app"),
	title: "Better Themes",
	description: "A theme provider for React",
	keywords: [
		"better-themes",
		"theme",
		"theme-provider",
		"react",
		"nextjs",
		"tanstack",
		"vite",
		"react-themes",
		"ssr",
		"dark-mode",
		"light-mode",
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
		url: "https://better-themes.netlify.app",
		title: "Better Themes",
		description: "A theme provider for React",
		siteName: "Better Themes",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Better Themes - A theme provider for React",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Better Themes",
		description: "A theme provider for React",
		images: ["/og-image.png"],
	},
};

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
