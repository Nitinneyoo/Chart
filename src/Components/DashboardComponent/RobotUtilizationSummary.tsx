import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UtilizationCard } from "./UtilizationCard"
import { TimelineChart } from "./TimelineChart"
import { mockUtilizationData } from "../../data/mockData"
import { useState } from "react"
import { Megaphone } from "lucide-react"

export default function RobotUtilizationSummary() {
  const [selectedRobot, setSelectedRobot] = useState("AR2002026");
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-blue-600">Robot Utilisation Summary</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
        
        <UtilizationCard 
          title="Active Time"
          value={mockUtilizationData[selectedRobot].activeTime}
          icon={Megaphone}
          iconBgColor="bg-orange-200"
          iconColor="text-orange-700" 
        />
       
        <UtilizationCard
          title="Idle Time"
          value={mockUtilizationData[selectedRobot].idleTime}
          icon={Megaphone}
          iconBgColor="bg-blue-200"
          iconColor="text-blue-700" 
        />

        <UtilizationCard
          title="Robot Utilisation rate"
          value={mockUtilizationData[selectedRobot].utilizationRate}
          icon={Megaphone}
          iconBgColor="bg-green-200"
          iconColor="text-green-700"
        />

        <Card className="bg-white border-opacity-20 flex-1 max-w-[380px] p-0 h-full rounded-sm">
          <CardContent className="p-2">
            <p className="text-sm text-gray-600 mb-2">Robot Name</p>
            <Select
              defaultValue="AR2002026"
              value={selectedRobot}
              onValueChange={setSelectedRobot}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {mockUtilizationData.robotOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Time Spend Section */}
      <TimelineChart robotId={selectedRobot} />
    </div>
  )
}
