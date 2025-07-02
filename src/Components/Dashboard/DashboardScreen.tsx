import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, Bar, BarChart, XAxis, YAxis } from "@/components/ui/chart"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { MetricCard } from "../DashboardComponent/MetricCard"
import { chartData } from "../../data/chartData"
import { useState } from "react"
import ActiveAnimation from "../Utility/Lotti/Active.json"
import SuccessfulAnimation from "../Utility/Lotti/Succesfull.json"
import ErrorAnimation from "../Utility/Lotti/Error.json"
import MaintenanceAnimation from "../Utility/Lotti/Maintanance.json"
import PeakActivityTimeline from '../DashboardComponent/peakactivityTImeline';
import RobotUtilizationSummary from '../DashboardComponent/RobotUtilizationSummary';
import { mockFulfillmentData } from "../../data/mockData";

type TimePeriod = "24hours" | "7days" | "30days";

const chartConfig = {
  assigned: {
    label: "Assigned Requests",
    color: "#00ff80",
  },
  completed: {
    label: "Completed Requests",
    color: "#005EB8",
  },
} satisfies ChartConfig

const DashboardScreen = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("30days");
    
    return (
        <div className="p-4 md:p-6 space-y-6 bg-gray-50">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold text-blue-600 mb-6">Request Fulfillment Overview</h1>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <MetricCard
                        title="Total Assigned Requests"
                        value={mockFulfillmentData.totalAssigned}
                        description="Robots that are currently in mission"
                        animationData={ActiveAnimation}
                    />
                    <MetricCard
                        title="Completed Requests"
                        value={mockFulfillmentData.completed}
                        description="Robots that are not in any mission"
                        animationData={SuccessfulAnimation}
                    />
                    <MetricCard
                        title="Failed Requests"
                        value={mockFulfillmentData.failed}
                        description="Robots that are in charging"
                        animationData={ErrorAnimation}
                    />
                    <MetricCard
                        title="Fulfillment Success Rate (%)"
                        value={mockFulfillmentData.successRate}
                        description="Robots that are currently being serviced"
                        animationData={MaintenanceAnimation}
                    />
                </div>

                {/* Chart Section */}
                <Card className="bg-white">
                    <CardContent className="p-6">
                        {/* Chart Header with Legend and Controls */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
                            {/* Legend */}
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-[#00ff80] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Assigned Requests</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-[#005EB8] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Completed Requests</span>
                                </div>
                            </div>

                            {/* Time Period Controls */}
                            <div className="flex items-center space-x-2">
                                <Button 
                                    variant={selectedPeriod === "24hours" ? "default" : "outline"} 
                                    size="sm" 
                                    onClick={() => setSelectedPeriod("24hours")}
                                >
                                    Last 24 Hours
                                </Button>
                                <Button 
                                    variant={selectedPeriod === "7days" ? "default" : "outline"} 
                                    size="sm" 
                                    onClick={() => setSelectedPeriod("7days")}
                                >
                                    Last 7 Days
                                </Button>
                                <Button 
                                    variant={selectedPeriod === "30days" ? "default" : "outline"} 
                                    size="sm" 
                                    onClick={() => setSelectedPeriod("30days")}
                                >
                                    Last 30 Days
                                </Button>
                                <div className="ml-4">
                                    <DatePickerWithRange />
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <ChartContainer config={chartConfig} className="h-96 w-full">
                            <BarChart data={chartData[selectedPeriod]}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="assigned" fill="var(--color-assigned)" radius={4} />
                                <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                {/* Peak Activity Timeline */}
                <PeakActivityTimeline />

                {/* Robot Utilization Summary */}
                <RobotUtilizationSummary />
        </div>
    )
}

export default DashboardScreen