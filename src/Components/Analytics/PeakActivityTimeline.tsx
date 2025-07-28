"use client";

import { Clock } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
// import { Label } from "@/components/ui/label";
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
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 md:w-full xl:w-1/2">
				<div className="flex items-center lg:justify-between w-full">
					<div className="bg-white border rounded-lg shadow-sm p-2 flex items-center gap-4 w-1/2 md:w-[40%] wrap-break-word">
						<div className="bg-blue-100 rounded-lg p-3">
							<Clock className="w-6 h-6 text-blue-600" />
						</div>
						<div className="flex w-full  flex-col">
							<div className="text-sm text-[#0F172A] mb-1 ">
								Maximum Transport Orders
							</div>
							<div className="text-md font-bold text-[#0F172A]">{maxOrders}</div>
						</div>
					</div>
					<div className="pr-4 pt-7 pl-4 gap-4 w-1/2 flex justify-center">

						<div className=" w-1/2">
							<RobotSelector onRobotChange={onRobotChange} />
						</div>
						<div className="w-1/2">
							<DateRangeFilter onDateRangeChange={() => { }} />
						</div>
					</div>
				</div>

			</div>


			<Card className="bg-white">
				<CardHeader className="pb-2">
					<p className="text-sm text-gray-600 mb-2">
						You can analyse the number of transport orders processed at a given
						time
					</p>
				</CardHeader>
				<CardContent className="p-0">
					<div className="h-80 flex">
						<div className="flex items-center justify-start">
							<div className="-rotate-90 text-blue-700 font-medium text-sm">
								Transport order
							</div>
						</div>
						<div className="flex flex-1 w-full">
							<ChartContainer
								config={{
									order: {
										label: "Transport Orders",
										color: "hsl(217, 91%, 60%)",
									},
								}}
								className="h-full w-full"
							>
								<BarChart data={timelineData}>
									<XAxis
										dataKey="timestamp"
										axisLine={true}
										tickLine={true}
										interval={10}
										tickFormatter={(value) => `${value.split(":")[0]}:00`}
										tick={{ fontSize: 12, fill: "#2563eb" }}
									/>
									<YAxis hide domain={[0, "dataMax"]} />
									<ChartTooltip content={<ChartTooltipContent />} />
									<Bar dataKey="total" fill="#005EB8" />
								</BarChart>
							</ChartContainer>
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
