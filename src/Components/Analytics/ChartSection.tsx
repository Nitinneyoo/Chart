"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartSectionProps {
  activeView: "volume" | "success";
  requestsData?: any[];
  successRateData?: any[];
}

const defaultRequestsData = [
  { date: "12 Mar", assigned: 80, completed: 75 },
  { date: "13 Mar", assigned: 100, completed: 95 },
  { date: "14 Mar", assigned: 120, completed: 110 },
  { date: "15 Mar", assigned: 110, completed: 105 },
  { date: "16 Mar", assigned: 280, completed: 260 },
  { date: "17 Mar", assigned: 100, completed: 90 },
  { date: "18 Mar", assigned: 60, completed: 55 },
  { date: "19 Mar", assigned: 180, completed: 170 },
  { date: "20 Mar", assigned: 100, completed: 95 },
  { date: "21 Mar", assigned: 160, completed: 150 },
];

const defaultSuccessRateData = [
  { date: "12", rate: 94 },
  { date: "13", rate: 95 },
  { date: "14", rate: 92 },
  { date: "15", rate: 95 },
  { date: "16", rate: 93 },
  { date: "17", rate: 90 },
  { date: "18", rate: 92 },
  { date: "19", rate: 94 },
  { date: "20", rate: 95 },
  { date: "21", rate: 94 },
];

export default function ChartSection({ 
  activeView, 
  requestsData = defaultRequestsData, 
  successRateData = defaultSuccessRateData 
}: ChartSectionProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="h-80">
          {activeView === "volume" ? (
            <ChartContainer
              config={{
                assigned: {
                  label: "Assigned Requests",
                  color: "hsl(217, 91%, 60%)",
                },
                completed: {
                  label: "Completed Requests",
                  color: "hsl(142, 76%, 36%)",
                },
              }}
              className="h-full w-full"
            >
              <BarChart data={requestsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="assigned"
                  fill="var(--color-assigned)"
                  name="Assigned Requests"
                />
                <Bar
                  dataKey="completed"
                  fill="var(--color-completed)"
                  name="Completed Requests"
                />
              </BarChart>
            </ChartContainer>
          ) : (
            <ChartContainer
              config={{
                rate: {
                  label: "Success Rate %",
                  color: "hsl(142, 76%, 36%)",
                },
              }}
              className="h-full w-full"
            >
              <BarChart data={successRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="rate"
                  fill="var(--color-rate)"
                  name="Success Rate %"
                />
              </BarChart>
            </ChartContainer>
          )}
        </div>
        <div className="mt-4 flex items-center justify-center gap-6">
          {activeView === "volume" ? (
            <>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                <span className="text-sm text-gray-600">Assigned Requests</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
                <span className="text-sm text-gray-600">Completed Requests</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-600"></div>
              <span className="text-sm text-gray-600">Success Rate %</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}