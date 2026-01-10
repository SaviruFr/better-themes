import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<Image alt="better-themes" src="/favicon.svg" width={32} height={32} />
			),
		},
	};
}
