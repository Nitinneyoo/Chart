import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<header className="flex items-center justify-between bg-[#ffffff] shadow-sm border-b-2 w-full">
			<div className="flex items-center gap-3">
				<h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
			</div>

			<Button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
				<LogOut size={16} />
				<span className="text-sm">Logout</span>
			</Button>
		</header>
	);
}
