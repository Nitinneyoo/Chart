"use client";

import { BarChart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimePeriodSelector from "./TimePeriodSelector";

interface ChartControlsProps {
	activeView: "volume" | "success";
	onViewChange: (view: "volume" | "success") => void;
	onPeriodChange?: (period: string) => void;
	successIcon?: string;
}

export default function ChartControls({
	activeView,
	onViewChange,
	onPeriodChange,
}: ChartControlsProps) {
	return (
		<div className="flex items-center justify-between p-4">
			<Tabs
				value={activeView}
				onValueChange={(val) => onViewChange(val as "volume" | "success")}
			>
				<TabsList className="bg-[#E2E8F0] rounded-sm ">
					<TabsTrigger
						value="volume"
						className="data-[state=active]:text-[#005EB8] font-medium p-2 !rounded-sm"
					>
						<BarChart className="data-[state=active]:text-[#005EB8] " />
						Volume
					</TabsTrigger>
					<TabsTrigger
						value="success"
						className="data-[state=active]:text-[#15803D] font-medium p-2 !rounded-sm"
					>
						{activeView === "success" ? (
							<img
								src="/insights.svg"
								alt="Success"
								className="w-[22px] h-[17px] "
							/>
						) : (
							<img
								src="/insights2.svg"
								alt="Success"
								className="w-[22px] h-[17px]"
							/>
						)}
						Success
					</TabsTrigger>
				</TabsList>
			</Tabs>
			<TimePeriodSelector onPeriodChange={onPeriodChange} />
		</div>
	);
}
