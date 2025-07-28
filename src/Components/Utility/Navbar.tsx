import { Link } from "@tanstack/react-router";
import {
	AntennaIcon,
	Bot,
	ChartBarIncreasingIcon,
	LayoutDashboard,
} from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function Navbar() {
	return (
		<nav className="flex h-full w-[80px] flex-col items-center justify-start gap-6 bg-[#005EB8] py-6">
			<ul className="flex w-full flex-col gap-6">
				<li className="flex justify-center mb-8">
					<img src="/AnscerFleetIcon.svg" alt="Logo" className="w-12 h-12" />
				</li>
				<li className="flex w-full items-center justify-center px-1">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									to="/"
									className="flex w-full flex-col items-center gap-1 rounded-lg p-1 text-foreground"
									activeProps={{
										className: "bg-[#005EB8]",
									}}
								>
									<LayoutDashboard className="text-white" />
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p>Dashboard</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</li>
				<li className="flex items-center justify-center px-1">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									to="/robot"
									className="flex w-full flex-col items-center gap-1 rounded-lg p-1 text-foreground"
									activeProps={{
										className: "bg-[#005EB8]",
									}}
								>
									<Bot className="text-white" />
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p>Robot</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</li>
				<li className="flex items-center justify-center px-1">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									to="/analytics"
									className="flex w-full flex-col items-center gap-1 rounded-lg p-1 text-foreground"
									activeProps={{
										className: "bg-[#005EB8]",
									}}
								>
									<ChartBarIncreasingIcon className="text-white" />
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p>Analytics</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</li>
			</ul>
		</nav>
	);
}
