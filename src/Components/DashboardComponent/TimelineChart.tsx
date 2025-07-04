import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Card, CardContent } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { mockTimelineData } from "../../data/mockData";
import { DateRangeFilter } from "./DateRangeFilter";

interface TimelineChartProps {
	robotId?: string;
}

export function TimelineChart({ robotId }: TimelineChartProps = {}) {
	const [selectedRobot, setSelectedRobot] = useState("all-robots");
	const [dateRange, setDateRange] = useState<DateRange | undefined>();

	const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
		setDateRange(newDateRange);
		// Here you can filter data based on the selected date range
		console.log("Date range changed:", newDateRange);
	};

	// Use robotId prop if provided, otherwise use local state
	const activeRobot = robotId || selectedRobot;

	// Map AR* robot IDs to our data format
	let mappedRobotId = activeRobot;
	if (activeRobot === "AR2002026") mappedRobotId = "robot-1";
	else if (activeRobot === "AR2002027") mappedRobotId = "robot-2";
	else if (activeRobot.startsWith("AR")) mappedRobotId = "all-robots";

	// Get data for the selected robot
	const timelineData =
		mockTimelineData[mappedRobotId] || mockTimelineData["all-robots"];
	return (
		<Card className="bg-white shadow-sm p-0">
			<CardContent className="p-6">
				<div className="mb-6">
					<div className="flex gap-6">
						<div>
							<h2 className="text-lg font-medium mb-1">Time Spend</h2>
							<p className="text-sm text-gray-600 mb-4">
								What did the devices do during the day?
							</p>
						</div>
						<div className="flex items-center gap-4">
							<div className="w-fit">
								<DateRangeFilter onDateRangeChange={handleDateRangeChange} />
							</div>
						</div>
						{!robotId && (
							<div>
								<Select
									defaultValue="all-robots"
									value={selectedRobot}
									onValueChange={setSelectedRobot}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all-robots">All Robots</SelectItem>
										<SelectItem value="robot-1">Robot 1</SelectItem>
										<SelectItem value="robot-2">Robot 2</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
					</div>
				</div>

				{/* Timeline Chart */}
				<div className="relative mt-8">
					{/* Y-axis labels */}
					<div
						className="absolute left-0 text-xs text-gray-600 pr-4"
						style={{ top: "24px" }}
					>
						<div
							className="absolute flex items-center h-6"
							style={{ top: "16px" }}
						>
							Error
						</div>
						<div
							className="absolute flex items-center h-6"
							style={{ top: "56px" }}
						>
							Active
						</div>
						<div
							className="absolute flex items-center h-6"
							style={{ top: "96px" }}
						>
							Idle
						</div>
						<div
							className="absolute flex items-center h-6"
							style={{ top: "136px" }}
						>
							Charging
						</div>
						<div
							className="absolute flex items-center h-6"
							style={{ top: "176px" }}
						>
							Connected
						</div>
					</div>

					{/* Chart area */}
					<div className="ml-16 relative">
						{/* Grid lines and time labels */}
						<div className="flex justify-between text-xs text-gray-400 mb-2">
							{Array.from({ length: 15 }, (_, i) => (
								<span key={i} className="w-16 text-center">
									{String(10 + i).padStart(2, "0")}:00
								</span>
							))}
						</div>

						{/* Chart bars */}
						<div className="relative h-48 bg-gray-50 rounded">
							{timelineData.map((bar, index) => (
								<div
									key={`${bar.status}-${index}`}
									className={`absolute ${bar.color} h-6 rounded`}
									style={{
										top: bar.position.top,
										left: bar.position.left,
										width: `${bar.duration}%`,
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
