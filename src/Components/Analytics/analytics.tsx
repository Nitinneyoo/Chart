import { useState } from "react";
import RequestsOverview from "./RequestOverview";
import RobotHeatMap from "./RobotHeatMap";
import RobotUtilization from "./RobotUtilization";

export default function FleetAnalytics() {
	const [activeLink, setActiveLink] = useState<"overview" | "heatmap" | "utilization">("overview");

	return (
		<div className="min-h-full flex flex-col bg-gray-50">
			{/* Header */}
			<header className="flex items-center justify-between bg-white shadow-sm border-b-2 w-full p-4">
				<h1 className="text-[34px] font-bold text-gray-800">Fleet Analytics</h1>
			</header>

			{/* Links */}
			<div className="px-6 py-4 bg-white/20 backdrop-blur-md border border-white/20 sticky top-0 z-10 shadow-sm">
				<div className="grid grid-cols-3 bg-[#E0F2FE] rounded-lg lg:w-1/2">
					<button
						onClick={() => setActiveLink("overview")}
						className={`px-4 py-2 text-center rounded-lg ${activeLink === "overview" ? "bg-[#005EB8] text-white" : "text-[#475569]"
							}`}
					>
						Requests Overview
					</button>
					<button
						onClick={() => setActiveLink("heatmap")}
						className={`px-4 py-2 text-center rounded-lg ${activeLink === "heatmap" ? "bg-[#005EB8] text-white" : "text-[#475569]"
							}`}
					>
						Robot Heatmap
					</button>
					<button
						onClick={() => setActiveLink("utilization")}
						className={`px-4 py-2 text-center rounded-lg ${activeLink === "utilization" ? "bg-[#005EB8] text-white" : "text-[#475569]"
							}`}
					>
						Robot Utilization
					</button>
				</div>
			</div>

			{/* Content Below Links */}
			<div className="p-6 flex-1 w-full">
				{activeLink === "overview" && <RequestsOverview />}
				{activeLink === "heatmap" && <RobotHeatMap />}
				{activeLink === "utilization" && <RobotUtilization />}
			</div>
		</div >
	);
}
