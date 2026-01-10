const viteLogo = "/vite.svg";

import catFlashbang from "./assets/cat-flashbang.gif";
import { ThemeSwitcher } from "./components/theme-switcher";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-svh p-6">
			<div className="flex flex-col items-center space-y-3 text-center max-w-4xl">
				<Badge
					variant="outline"
					className="gap-2 text-xs font-semibold py-1.5 px-4 rounded-full"
				>
					Built with Vite
					<div className="relative">
						<img
							src={viteLogo}
							alt="vite logo"
							className="w-4 h-4 select-none"
							width={16}
							height={16}
						/>
						<div className="absolute inset-0 z-10" />
					</div>
				</Badge>
				<h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85]">
					Better Themes
				</h1>
				<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
					A theme provider for React
				</p>

				<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
					<Button
						asChild
						size="lg"
						className="w-full sm:w-auto px-10 h-14 text-lg rounded-full"
					>
						<a
							draggable={false}
							target="_blank"
							rel="noopener noreferrer"
							href="https://better-themes.netlify.app/docs"
						>
							Read the Docs
						</a>
					</Button>
					<div className="flex items-center justify-center w-full sm:w-auto">
						<ThemeSwitcher size="lg" />
					</div>
				</div>
			</div>
			<div className="w-full max-w-4xl mt-12">
				<AspectRatio
					ratio={16 / 9}
					className="select-none bg-muted rounded-xl border  overflow-hidden relative"
				>
					<img
						className="dark:brightness-75 brightness-100 object-cover w-full h-full"
						src={catFlashbang}
						alt="cat-flashbang"
						width={100}
						height={100}
					/>
					<div className="absolute inset-0 z-10" />
				</AspectRatio>
			</div>
		</div>
	);
}

export default App;
