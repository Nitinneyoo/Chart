import { Clock4 } from "lucide-react";
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
	XAxis,
	YAxis,
	ResponsiveContainer,
	LineChart,
	Line,
	Rectangle,
	// Tooltip,
	Customized,
} from "recharts";
import {
	type RobotId,
	RobotUtilizationData,
	type TimePeriod,
} from "../../data/mockAnalyticsData";
import { DateRangeFilter } from "../../Components/Dashboard/DashboardComponent/DateRangeFilter";
import { TimelineChart } from "../Dashboard/DashboardComponent/TimeLineGantChart"

interface UtilizationCardProps {
	title: string;
	value: string | number;
	icon: React.ReactNode;
	iconBgColor: string;
	bgColor?: string;
	className?: string;
}

const UtilizationCard: React.FC<UtilizationCardProps> = ({
	title,
	value,
	icon,
	iconBgColor,
	bgColor = "bg-white",
	className = "",
}) => {
	return (
		<div className={`flex shadow rounded-lg border border-[#E2E8F0] p-2 ${bgColor} ${className}`}>
			<div className="flex items-center justify-center gap-3">
				<div className={`w-11 h-11 ${iconBgColor} rounded-lg flex items-center justify-center`}>
					{icon}
				</div>
				<div>
					<p className="font-medium text-[#0F172A] text-sm">{title}</p>
					<p className="text-base font-semibold text-[#0F172A]">{value}</p>
				</div>
			</div>
		</div>
	);
};

// const CustomGanttRectangle = ({ viewBox, timeBlocks }: any) => {
// 	if (!viewBox) return null; // Prevent destructuring error
// 	const { width, height } = viewBox;
// 	const totalHours = 14;
// 	const yAxisCategories = ['Error', 'Active', 'Idle', 'Charging'];
// 	const categoryHeight = height / yAxisCategories.length;

// 	return (
// 		<g>
// 			{yAxisCategories.map((category, index) => {
// 				const blocks = timeBlocks[category.toLowerCase()] || [];
// 				const y = index * categoryHeight + (categoryHeight - 24) / 2;

// 				return blocks.map((block: any, blockIndex: number) => {
// 					const x = ((block.start - 10) / totalHours) * width;
// 					const blockWidth = (block.duration / totalHours) * width;

// 					return (
// 						<g key={`${category}-${block.start}-${blockIndex}`}>
// 							<Rectangle
// 								x={x}
// 								y={y}
// 								width={blockWidth}
// 								height={24}
// 								fill={
// 									category === 'Error' ? '#f87171' :
// 										category === 'Active' ? '#bfdbfe' :
// 											category === 'Idle' ? '#9ca3af' :
// 												'#86efac'
// 								}
// 								radius={4}
// 							/>
// 							{block.duration >= 1 && (
// 								<text x={x + 4} y={y + 16} fontSize={10} fill="#ffffff">
// 									{`${block.start}:00`}
// 								</text>
// 							)}
// 						</g>
// 					);
// 				});
// 			})}
// 		</g>
// 	);
// };



export default function RobotUtilization() {
	const [selectedRobot, setSelectedRobot] = useState<RobotId>("ARTOO2025");
	const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("30days");

	const utilizationData = RobotUtilizationData[selectedRobot][selectedPeriod];

	const timeBlocks = {
		active: [
			{ start: 10, duration: 3 },
			{ start: 13, duration: 1.5 },
			{ start: 18, duration: 1.5 },
			{ start: 19.5, duration: 1.5 },
			{ start: 21, duration: 1 },
			{ start: 22.5, duration: 1.5 },
		],
		idle: [
			{ start: 13, duration: 0.5 },
			{ start: 19, duration: 0.5 },
			{ start: 20.5, duration: 0.5 },
			{ start: 22, duration: 0.5 },
		],
		charging: [
			{ start: 15, duration: 1.5 },
		],
		error: [
			{ start: 14.25, duration: 0.25 },
		],
	};

	const hours = Array.from({ length: 15 }, (_, i) => 10 + i);
	const yAxisCategories = ['Error', 'Active', 'Idle', 'Charging'];

	const chartData = hours.flatMap((hour) =>
		yAxisCategories.map((category) => ({
			hour: `${hour}:00`,
			category,
			value: 1,
		}))
	);

	return (
		<div className="space-y-6 mt-6 p-4">
			<div className="grid grid-cols-4 gap-4 mb-6">
				<div className="col-span-1 flex flex-col justify-center">
					<Label className="text-sm text-blue-600 mb-2 block">Robot Name</Label>
					<Select
						value={selectedRobot}
						onValueChange={(value) => setSelectedRobot(value as RobotId)}
					>
						<SelectTrigger className="w-full text-[#1E293B] text-sm">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="ARTOO2025" className="text-[#1E293B] text-sm">ARTOO2025</SelectItem>
							<SelectItem value="ARTOO2026" className="text-[#1E293B] text-sm">ARTOO2026</SelectItem>
							<SelectItem value="ARTOO2027" className="text-[#1E293B] text-sm">ARTOO2027</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="col-span-1 flex flex-col justify-center">
					<div className="flex flex-col justify-center">
						<Label className="text-sm text-blue-600 mb-7"></Label>
					</div>
					<DateRangeFilter onDateRangeChange={() => { }} />
				</div>
				<UtilizationCard
					title="Robot Utilization"
					value={`${utilizationData.robotUtilization}%`}
					icon={<img src="/insight.svg" alt="Success" className="w-6 h-6" />}
					iconBgColor="bg-[#FFEDD5]"
				/>
				<UtilizationCard
					title="Number of charge cycles"
					value={`${utilizationData.chargeCycles} cycles`}
					icon={<img src="/battery_charging_full.svg" alt="Success" className="w-6 h-6" />}
					iconBgColor="bg-green-100"
				/>
			</div>
			<div className="grid grid-cols-4 gap-4 mb-6">
				<UtilizationCard
					title="Active time"
					value={utilizationData.activeTime}
					icon={<Clock4 className="text-[#005EB8] h-6 w-6" />}
					iconBgColor="bg-[#E0F2FE]"
					bgColor="bg-[#F8FAFC]"
				/>
				<UtilizationCard
					title="Idle time"
					value={utilizationData.idleTime}
					icon={<Clock4 className="text-[#475569] h-6 w-6" />}
					iconBgColor="bg-[#E2E8F0]"
					bgColor="bg-[#F8FAFC]"
				/>
				<UtilizationCard
					title="Charging time"
					value={utilizationData.chargingTime}
					icon={<Clock4 className="text-[#16A34A] h-6 w-6" />}
					iconBgColor="bg-[#DCFCE7]"
					bgColor="bg-[#F8FAFC]"
				/>
				<UtilizationCard
					title="Error time"
					value={utilizationData.errorTime}
					icon={<Clock4 className="text-[#DC2626] h-6 w-6" />}
					iconBgColor="bg-[#FEE2E2]"
					bgColor="bg-[#F8FAFC]"
				/>
			</div>

			<TimelineChart />

		</div>
	);
}