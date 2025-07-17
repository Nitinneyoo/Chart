"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	generateChartData,
	generateMetricsData,
	generateSuccessRateData,
	generateTimelineData,
	type RobotId,
	type TimePeriod,
} from "../../data/mockAnalyticsData";
import RobotHeatMap from "./AnaliticsComponent/RobotHeatMap";
import RobotUtilization from "./AnaliticsComponent/RobotUtilization";
import ChartControls from "./ChartControls";
import ChartSection from "./ChartSection";
import MetricsCards from "./MetricsCards";
import PeakActivityTimeline from "./PeakActivityTimeline";

const timelineData = Array.from({ length: 100 }, (_, i) => ({
	time: `${String(Math.floor(i / 4)).padStart(2, "0")}:${String((i % 4) * 15).padStart(2, "0")}`,
	orders: Math.floor(Math.random() * 50) + 10,
}));

export default function FleetAnalytics() {
	const [activeView, setActiveView] = useState<"volume" | "success">("volume");
	const [activeTab, setActiveTab] = useState("overview");
	const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("30days");
	const [timelineRobot, setTimelineRobot] = useState<RobotId>("all");

	// Generate dynamic data - main charts use "all" robots, timeline uses separate selection
	const metricsData = generateMetricsData("all", selectedPeriod);
	const requestsData = generateChartData("all", selectedPeriod);
	const successRateData = generateSuccessRateData("all", selectedPeriod);
	const timelineData = generateTimelineData(timelineRobot, selectedPeriod);

	return (
		<div className="h-full flex flex-col bg-gray-50">
			{/* Sticky Navigation Tabs */}
			<div className="sticky top-0 z-10 bg-white border-b">
				<div className="px-6 py-4">
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className="w-full"
					>
						<TabsList className="grid w-full grid-cols-3 lg:w-1/2 lg:grid-cols-3 bg-[#E0F2FE]">
							<TabsTrigger
								value="overview"
								className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
							>
								<img
									src="/insights.svg"
									alt="Success"
									className="w-4 h-4 mr-2"
								/>
								Requests Overview
							</TabsTrigger>
							<TabsTrigger
								value="heatmap"
								className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
							>
								Robot Heatmap
							</TabsTrigger>
							<TabsTrigger
								value="utilization"
								className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
							>
								Robot Utilization
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>
			</div>

			{/* Scrollable Content */}
			<div className="flex-1 overflow-auto">
				<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
					<TabsContent value="overview" className="p-6 space-y-6">
						<MetricsCards activeView={activeView} data={metricsData} />

						<ChartControls
							activeView={activeView}
							onViewChange={setActiveView}
							onPeriodChange={(period) =>
								setSelectedPeriod(period as TimePeriod)
							}
							successIcon="/insights.svg"
						/>

						<ChartSection
							activeView={activeView}
							requestsData={requestsData}
							successRateData={successRateData}
						/>

						<PeakActivityTimeline
							timelineData={timelineData}
							onRobotChange={(robot) => setTimelineRobot(robot as RobotId)}
						/>
					</TabsContent>

					<TabsContent value="heatmap" className="p-6">
						<RobotHeatMap />
					</TabsContent>

					<TabsContent value="utilization" className="p-0">
						<RobotUtilization />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
