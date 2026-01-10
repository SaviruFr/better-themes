import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.tsx", "./src/rsc/index.tsx"],
	format: ["esm", "cjs"],
	platform: "browser",
	minify: true,
	dts: true,
	clean: true,
	sourcemap: false,
	treeshake: true,
});
