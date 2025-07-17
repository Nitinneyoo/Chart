"use client";

import { Clock } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { DateRangeFilter } from "../Dashboard/DashboardComponent/DateRangeFilter";
import RobotSelector from "./RobotSelector";

interface PeakActivityTimelineProps {
	timelineData?: any[];
	maxOrders?: number;
	onRobotChange?: (robot: string) => void;
}

const defaultTimelineData = Array.from({ length: 10 * 6 }, (_, i) => {
	const hour = Math.floor(i / 6) + 10;
	const minute = (i % 6) * 10;
	return {
		time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
		period: "24hours",
		orders: Math.floor(Math.random() * 41) + 10,
	};
});

export default function PeakActivityTimeline({
	timelineData = defaultTimelineData,
	maxOrders = 45,
	onRobotChange,
}: PeakActivityTimelineProps) {
	return (
		<Card className="bg-white">
			<CardHeader className="pb-2">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
					<div className="bg-white border rounded-lg shadow-sm px-6 py-4 flex items-center gap-4 min-w-[220px]">
						<div className="bg-blue-100 rounded-lg p-2">
							<Clock className="w-6 h-6 text-blue-600" />
						</div>
						<div>
							<div className="text-xs text-gray-500 mb-1">
								Maximum Transport Orders
							</div>
							<div className="text-2xl font-bold text-blue-700">
								{maxOrders}
							</div>
						</div>
					</div>
					<div className="min-w-[180px]">
						<RobotSelector onRobotChange={onRobotChange} />
					</div>
					<div className="min-w-[220px]">
						<DateRangeFilter onDateRangeChange={() => {}} />
					</div>
				</div>
				<p className="text-sm text-gray-600 mb-2">
					You can analyse the number of transport orders processed at a given
					time
				</p>
			</CardHeader>
			<CardContent>
				<div className="h-80 flex">
					<div className="flex items-center justify-center pr-2">
						<span className="-rotate-90 text-blue-700 font-medium text-sm">
							Transport order
						</span>
					</div>
					<div className="flex-1">
						<ChartContainer
							config={{
								orders: {
									label: "Transport Orders",
									color: "hsl(217, 91%, 60%)",
								},
							}}
							className="h-full w-full"
						>
							<BarChart data={timelineData}>
								<XAxis
									dataKey="time"
									axisLine={true}
									tickLine={true}
									interval={5}
									tickFormatter={(value) => `${value.split(":")[0]}:00`}
									tick={{ fontSize: 12, fill: "#2563eb" }}
								/>
								<YAxis hide domain={[0, "dataMax"]} />
								<ChartTooltip content={<ChartTooltipContent />} />
								<Bar dataKey="orders" fill="var(--color-orders)" />
							</BarChart>
						</ChartContainer>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
