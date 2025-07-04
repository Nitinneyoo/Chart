import { Link } from "@tanstack/react-router";
import { Bot, LayoutDashboard } from "lucide-react";

export function Navbar() {
	return (
		<nav className="flex h-screen w-[80px] flex-col items-center justify-center gap-2 bg-[#005EB8]">
			<ul className="my-24 flex w-full flex-col gap-2">
				<li className="flex w-full items-center justify-center px-1">
					<Link
						to="/"
						className="flex w-full flex-col items-center gap-1 rounded-lg p-1 text-foreground"
						activeProps={{
							className: "bg-[#005EB8]",
						}}
					>
						<LayoutDashboard />
						<p className="font-light text-xs">Dashboard</p>
					</Link>
				</li>
				<li className="flex items-center justify-center px-1">
					<Link
						to="/robot"
						className="flex w-full flex-col items-center gap-1 rounded-lg p-1 text-foreground"
						activeProps={{
							className: "bg-[#005EB8]",
						}}
					>
						<Bot />
						<p className="font-light text-xs">Robot</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
