import { Laptop, Sun, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/_components/ui/aspect-ratio";
import { Button } from "@/_components/ui/button";
export default function HomePage() {
	return (
		<div className="flex flex-col justify-center items-center text-center flex-1 gap-8 p-8">
			<div className="flex flex-col items-center">
				<h1 className="text-7xl font-extrabold mb-4">Better Themes</h1>
				<p className="text-lg text-muted-foreground">
					A theme provider for React
				</p>
				<Button asChild className="mt-4 rounded-full" size="lg">
					<Link href="/docs">Get Started</Link>
				</Button>
			</div>
			<div className="flex flex-wrap gap-4 justify-center max-w-2xl">
				<div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border">
					<Sun className="size-4" />
					<span className="text-sm font-medium">Light & Dark</span>
				</div>
				<div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border">
					<Laptop className="size-4" />
					<span className="text-sm font-medium">System Sync</span>
				</div>
				<div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border">
					<Zap className="size-4" />
					<span className="text-sm font-medium">No Flash</span>
				</div>
			</div>
			<div className="w-full max-w-5xl">
				<AspectRatio
					ratio={16 / 9}
					className="select-none bg-muted rounded-xl border shadow-2xl overflow-hidden relative"
				>
					<Image
						src="/theme-os.gif"
						alt="better-themes"
						fill
						className="object-cover"
						unoptimized
						loading="eager"
					/>
					<div className="absolute inset-0 z-10" />
				</AspectRatio>
			</div>
		</div>
	);
}
