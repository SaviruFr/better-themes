import "../styles/globals.css";

import { ThemeProvider } from "better-themes/rsc";
import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressContentEditableWarning>
			<head>
				<title>Better Themes | Waku</title>
				<meta name="description" content="A theme provider for React" />
				<meta
					name="keywords"
					content="theme, theme-provider, react, waku, vite, react-themes, ssr, dark-mode, light-mode, better-themes example"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://waku-better-themes.netlify.app"
				/>
				<meta property="og:title" content="Better Themes | Waku" />
				<meta property="og:description" content="A theme provider for React" />
				<meta property="og:site_name" content="Better Themes | Waku" />
				<meta property="og:image" content="/og-image.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:image:alt"
					content="Better Themes | Waku - A theme provider for React"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Better Themes | Waku" />
				<meta name="twitter:description" content="A theme provider for React" />
				<meta name="twitter:image" content="/og-image.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					precedence="font"
				/>
			</head>
			<body>
				<ThemeProvider disableTransitionOnChange attribute="class">
					<div className="font-['Nunito']">
						<main>{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
