import { useState } from "react";
import { DateRangeFilter } from "@/Components/Dashboard/DashboardComponent/DateRangeFilter";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// Define DateRange type to match react-day-picker's DateRange
type DateRange = { from?: Date; to?: Date };

const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
	// You probably want to do something with newDateRange here
	console.log("Dashboard date range changed:", newDateRange);
};

export function ControlPanel() {
	const [activePeriod, setActivePeriod] = useState("24hours");

	return (
		<div className="flex flex-col gap-4 w-full p-4 bg-white shadow-sm rounded-lg">
			<div className="space-y-2 w-full">
				<Label className="text-sm font-medium text-blue-600">
					Heatmap Type
				</Label>
				<div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
					{/* Selects Section - Half width on sm/md, auto on lg+ */}
					<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/2 lg:w-auto">
						<Select defaultValue="congestion">
							<SelectTrigger className="w-full sm:w-[180px]">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="congestion">Congestion Zones</SelectItem>
								<SelectItem value="traffic">Traffic Flow</SelectItem>
								<SelectItem value="battery">Battery Levels</SelectItem>
							</SelectContent>
						</Select>
						<Select defaultValue="all">
							<SelectTrigger className="w-full sm:w-[180px]">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Robots</SelectItem>
								<SelectItem value="active">AR001</SelectItem>
								<SelectItem value="idle">AR002</SelectItem>
								<SelectItem value="charging">AR003</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Buttons and Date Filter Section - Below on sm/md, inline on lg+ */}
					<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto lg:flex-wrap-reverse lg:justify-end">
						<div className="flex  gap-2">
							<Button
								variant="outline"
								className={`${activePeriod === "24hours" ? "text-[#005EB8] border-[#005EB8]" : ""}`}
								onClick={() => {
									setActivePeriod("24hours");
									console.log("Clicked For 24 Hrs");
								}}
							>
								Last 24 Hours
							</Button>
							<Button
								variant="outline"
								className={`${activePeriod === "7days" ? "text-[#005EB8] border-[#005EB8]" : ""}`}
								onClick={() => {
									setActivePeriod("7days");
									console.log("Clicked For 7 Days");
								}}
							>
								Last 7 Days
							</Button>
							<Button
								variant="outline"
								className={`${activePeriod === "30days" ? "text-[#005EB8] border-[#005EB8]" : ""}`}
								onClick={() => {
									setActivePeriod("30days");
									console.log("Clicked For 30 Days");
								}}
							>
								Last 30 Days
							</Button>
						</div>
						<div className="flex">

							<DateRangeFilter onDateRangeChange={handleDateRangeChange} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
