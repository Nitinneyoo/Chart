"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, Bot } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { InfoCard } from "./InfoCard"
import { FilterSection } from "./FilterSection"
import { mockPeakActivityData, mockPeakActivityInfo } from "../../data/mockData"
import { useState } from "react"
import { type DateRange } from "react-day-picker"

export default function peakActivityTimeline() {
  const [selectedRobot, setSelectedRobot] = useState("all-robots");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  
  const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
    setDateRange(newDateRange);
    console.log('Peak activity date range changed:', newDateRange);
  };
  
  // Get data for the selected robot
  const chartData = mockPeakActivityData[selectedRobot as keyof typeof mockPeakActivityData];
  const robotInfo = mockPeakActivityInfo[selectedRobot as keyof typeof mockPeakActivityInfo];
  return (
    <div className="space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-blue-600">Peak Activity Timeline</h1>

        {/* Top Cards and Filter Row */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <InfoCard
              title="Peak Activity Hours"
              value={robotInfo.peakHours}
              icon={Megaphone}
              bgColor="bg-orange-50"
              iconBgColor="bg-orange-200"
              iconColor="text-orange-700"
            />
            <InfoCard
              title="Maximum Missions initiated"
              value={robotInfo.maxMissions}
              icon={Bot}
              bgColor="bg-teal-50"
              iconBgColor="bg-teal-200"
              iconColor="text-teal-700"
            />
          </div>

          <FilterSection
            selectLabel="Robots"
            selectOptions={[
              { value: "all-robots", label: "All Robots" },
              { value: "robot-1", label: "Robot 1" },
              { value: "robot-2", label: "Robot 2" }
            ]}
            defaultValue="all-robots"
            selectedRobot={selectedRobot}
            onRobotChange={setSelectedRobot}
            onDateRangeChange={handleDateRangeChange}
          />
        </div>

        {/* Description */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-3 h-3 border border-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          <span>You can analyse the number of requests processed in a given time interval</span>
        </div>

        {/* Chart */}
        <Card>
          <CardContent className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis hide />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#0891b2"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: "#0891b2" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}
