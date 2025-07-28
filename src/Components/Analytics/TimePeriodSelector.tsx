

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "../Dashboard/DashboardComponent/DateRangeFilter";

type TimePeriod = "24hours" | "7days" | "30days" | "custom";

interface TimePeriodSelectorProps {
	onPeriodChange?: (period: TimePeriod) => void;
	className?: string;
}

const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
	newDateRange(newDateRange);
	console.log("Dashboard date range changed:", newDateRange);
};

export default function TimePeriodSelector({
	onPeriodChange,
	className = "",
}: TimePeriodSelectorProps) {
	const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("30days");

	const handlePeriodChange = (period: TimePeriod) => {
		setSelectedPeriod(period);
		onPeriodChange?.(period);
	};

	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<Button
				variant="outline"
				className="data-[state=active]:text-[#005EB8] data-[state=active]:border-[#005EB8]"
				data-state={selectedPeriod === "24hours" ? "active" : undefined}
				onClick={() => handlePeriodChange("24hours")}
			>
				Last 24 Hours
			</Button>
			<Button
				variant="outline"
				className="data-[state=active]:text-[#005EB8] data-[state=active]:border-[#005EB8]"
				data-state={selectedPeriod === "7days" ? "active" : undefined}
				onClick={() => handlePeriodChange("7days")}
			>
				Last 7 Days
			</Button>
			<Button
				variant="outline"
				className="data-[state=active]:text-[#005EB8] data-[state=active]:border-[#005EB8]"
				data-state={selectedPeriod === "30days" ? "active" : undefined}
				onClick={() => handlePeriodChange("30days")}
			>
				Last 30 Days
			</Button>
			<div className="ml-4">
				<DateRangeFilter onDateRangeChange={handleDateRangeChange} />
			</div>
		</div>
	);
}
