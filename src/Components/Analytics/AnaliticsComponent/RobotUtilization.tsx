"use client";

import { RotateCcw, Zap } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	generateRobotUtilizationData,
	type RobotId,
	type TimePeriod,
} from "../../../data/mockAnalyticsData";
import { DateRangeFilter } from "../../Dashboard/DashboardComponent/DateRangeFilter";

export default function Component() {
	const [selectedRobot, setSelectedRobot] = useState<RobotId>("ARTOO2025");
	const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("30days");

	const utilizationData = generateRobotUtilizationData(
		selectedRobot,
		selectedPeriod,
	);

	const hours = Array.from({ length: 15 }, (_, i) => 10 + i);

	return (
		<div className="space-y-6 mt-6 p-4">
			{/* Header Row */}
			<div className="grid grid-cols-4 gap-4 mb-6">
				{/* Robot Name */}
				<div>
					<Label className="text-sm text-blue-600 mb-2 block">Robot Name</Label>
					<Select
						value={selectedRobot}
						onValueChange={(value) => setSelectedRobot(value as RobotId)}
					>
						<SelectTrigger className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="ARTOO2025">ARTOO2025</SelectItem>
							<SelectItem value="ARTOO2026">ARTOO2026</SelectItem>
							<SelectItem value="ARTOO2027">ARTOO2027</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{/* Date */}
				<div className="flex items-end">
					<DateRangeFilter onDateRangeChange={() => {}} />
				</div>

				{/* Robot Utilization */}
				<div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
							<RotateCcw className="w-4 h-4 text-orange-500" />
						</div>
						<div>
							<p className="text-xs text-gray-500">Robot Utilization</p>
							<p className="text-xl font-bold">
								{utilizationData.robotUtilization}%
							</p>
						</div>
					</div>
				</div>

				{/* Number of charge cycles */}
				<div className="bg-green-50 border border-green-200 rounded-lg p-4">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
							<Zap className="w-4 h-4 text-green-500" />
						</div>
						<div>
							<p className="text-xs text-gray-500">Number of charge cycles</p>
							<p className="text-xl font-bold">
								{utilizationData.chargeCycles} cycles
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Status Cards Row */}
			<div className="grid grid-cols-4 gap-4 mb-6">
				<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
					<div className="flex items-center gap-3">
						<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
						<div>
							<p className="text-xs text-gray-500">Active time</p>
							<p className="text-lg font-bold">7 Hours</p>
						</div>
					</div>
				</div>

				<div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
					<div className="flex items-center gap-3">
						<div className="w-3 h-3 bg-gray-400 rounded-full"></div>
						<div>
							<p className="text-xs text-gray-500">Idle time</p>
							<p className="text-lg font-bold">42 Minutes</p>
						</div>
					</div>
				</div>

				<div className="bg-green-50 border border-green-200 rounded-lg p-4">
					<div className="flex items-center gap-3">
						<div className="w-3 h-3 bg-green-400 rounded-full"></div>
						<div>
							<p className="text-xs text-gray-500">Charging time</p>
							<p className="text-lg font-bold">6 Hours</p>
						</div>
					</div>
				</div>

				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<div className="flex items-center gap-3">
						<div className="w-3 h-3 bg-red-400 rounded-full"></div>
						<div>
							<p className="text-xs text-gray-500">Error time</p>
							<p className="text-lg font-bold">1 Hours</p>
						</div>
					</div>
				</div>
			</div>

			{/* Timeline Chart */}
			<Card className="bg-white">
				<CardContent className="p-6">
					<div className="relative">
						{/* Y-axis labels */}
						<div className="absolute left-0 top-0 h-52 flex flex-col justify-between text-sm text-gray-600 pr-4 z-10 py-4">
							<span>Error</span>
							<span>Active</span>
							<span>Idle</span>
							<span>Charging</span>
							<span>Shift</span>
						</div>

						{/* Chart container */}
						<div className="ml-16 relative h-52 bg-gray-100 rounded">
							{/* Grid lines */}
							<div className="absolute inset-0 flex">
								{hours.map((hour) => (
									<div
										key={hour}
										className="flex-1 border-r border-gray-300 last:border-r-0"
									></div>
								))}
							</div>

							{/* Timeline bars */}
							<div className="absolute inset-0">
								{/* Error row */}
								<div className="absolute top-8 left-0 right-0 h-8">
									<div
										className="absolute h-4 bg-red-400 rounded-sm"
										style={{ left: "16.67%", width: "1.5%" }}
									></div>
								</div>

								{/* Active row */}
								<div className="absolute top-20 left-0 right-0 h-8">
									<div
										className="absolute h-6 bg-blue-400 rounded-sm"
										style={{ left: "6.67%", width: "13.33%" }}
									></div>
									<div
										className="absolute h-6 bg-blue-400 rounded-sm"
										style={{ left: "26.67%", width: "6.67%" }}
									></div>
									<div
										className="absolute h-6 bg-blue-400 rounded-sm"
										style={{ left: "46.67%", width: "13.33%" }}
									></div>
									<div
										className="absolute h-6 bg-blue-400 rounded-sm"
										style={{ left: "66.67%", width: "6.67%" }}
									></div>
									<div
										className="absolute h-6 bg-blue-400 rounded-sm"
										style={{ left: "80%", width: "3.33%" }}
									></div>
									<div
										className="absolute h-6 bg-blue-400 rounded-sm"
										style={{ left: "86.67%", width: "10%" }}
									></div>
								</div>

								{/* Idle row */}
								<div className="absolute top-32 left-0 right-0 h-8">
									<div
										className="absolute h-4 bg-gray-500 rounded-sm"
										style={{ left: "20%", width: "6.67%" }}
									></div>
									<div
										className="absolute h-4 bg-gray-500 rounded-sm"
										style={{ left: "60%", width: "6.67%" }}
									></div>
									<div
										className="absolute h-4 bg-gray-500 rounded-sm"
										style={{ left: "73.33%", width: "6.67%" }}
									></div>
									<div
										className="absolute h-4 bg-gray-500 rounded-sm"
										style={{ left: "83.33%", width: "3.33%" }}
									></div>
								</div>

								{/* Charging row */}
								<div className="absolute top-44 left-0 right-0 h-8">
									<div
										className="absolute h-6 bg-green-400 rounded-sm"
										style={{ left: "33.33%", width: "13.33%" }}
									></div>
								</div>

								{/* Shift row */}
								<div className="absolute bottom-4 left-0 right-0 h-8 flex items-center">
									<div
										className="absolute bg-blue-200 px-3 py-1 rounded text-xs"
										style={{ left: "13.33%" }}
									>
										Shift 1
									</div>
									<div
										className="absolute bg-blue-200 px-3 py-1 rounded text-xs"
										style={{ left: "73.33%" }}
									>
										Shift 2
									</div>
								</div>
							</div>
						</div>

						{/* X-axis labels */}
						<div className="ml-16 flex justify-between text-xs text-gray-600 mt-2">
							{hours.map((hour) => (
								<span key={hour}>{hour}:00</span>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
