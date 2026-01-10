"use client";
import { ThemeProvider } from "better-themes/rsc";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import SearchDialog from "@/_components/search";
export function Provider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider attribute="class" disableTransitionOnChange>
			<RootProvider
				theme={{
					enabled: false,
				}}
				search={{
					SearchDialog,
				}}
			>
				{children}
			</RootProvider>
		</ThemeProvider>
	);
}
