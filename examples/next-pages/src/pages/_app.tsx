import "@/styles/globals.css";
import { ThemeProvider } from "better-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" disableTransitionOnChange>
			<Head>
				<title>Better Themes | Next</title>
				<meta name="description" content="A theme provider for React" />
				<meta
					name="keywords"
					content="theme, theme-provider, react, nextjs, react-themes, ssr, dark-mode, light-mode, better-themes example"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://next-pages-better-themes.netlify.app"
				/>
				<meta property="og:title" content="Better Themes | Next" />
				<meta property="og:description" content="A theme provider for React" />
				<meta property="og:site_name" content="Better Themes | Next" />
				<meta property="og:image" content="/og-image.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:image:alt"
					content="Better Themes | Next - A theme provider for React"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Better Themes | Next" />
				<meta name="twitter:description" content="A theme provider for React" />
				<meta name="twitter:image" content="/og-image.png" />
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
