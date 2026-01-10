import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "better-themes/rsc";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://next-app-better-themes.netlify.app"),
	title: "Better Themes | Next",
	description: "A theme provider for React",
	keywords: [
		"theme",
		"theme-provider",
		"react",
		"nextjs",
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
		url: "https://next-app-better-themes.netlify.app",
		title: "Better Themes | Next",
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
		title: "Better Themes | Next",
		description: "A theme provider for React",
		images: ["/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider disableTransitionOnChange attribute="class">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
