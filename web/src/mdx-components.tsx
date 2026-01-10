import * as Twoslash from "fumadocs-twoslash/ui";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		...Twoslash,
		TypeTable,
		Step,
		Steps,
		//biome-ignore lint/suspicious/noExplicitAny: Required by fumadocs documentation for ImageZoom integration
		img: (props) => <ImageZoom {...(props as any)} />,
		...components,
	};
}
