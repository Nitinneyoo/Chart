import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Chart from "react-apexcharts";
import moment from "moment";
import { mockTimelineDataNew } from "../../../data/mockData";
import type { ApexOptions } from "apexcharts";

interface TimelineEntry {
  startTime: string;
  endTime: string;
}

interface StatusGroup {
  status: string;
  timeline: TimelineEntry[];
}

interface MockData {
  [key: string]: StatusGroup[];
}

interface TimelineChartProps {
  robotId?: string;
}

export function TimelineChart({ robotId }: TimelineChartProps = {}) {
  const [selectedRobot, setSelectedRobot] = useState("all-robots");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
    setDateRange(newDateRange);
    console.log("Date range changed:", newDateRange);
  };

  const activeRobot = robotId || selectedRobot;

  let mappedRobotId = activeRobot;

  if (activeRobot) mappedRobotId = "all-robots";

  const timelineGroups: StatusGroup[] = (mockTimelineDataNew as MockData)[mappedRobotId] || (mockTimelineDataNew as MockData)["all-robots"] || [];

  // Base date for calculations (today or selected date)
  const baseDate = dateRange?.from ?? new Date();
  // Don't set hours to 0, let it be based on the data

  // Status colors are now defined in stateConfig

  // Process data: convert string times to Date objects
  const processedData = timelineGroups.flatMap((group) =>
    group.timeline
      .map((entry) => {
        try {
          // Parse startTime and endTime (HH:mm format)
          const startMoment = moment(entry.startTime, "HH:mm");
          const endMoment = moment(entry.endTime, "HH:mm");

          if (!startMoment.isValid() || !endMoment.isValid()) {
            console.warn(`Invalid time format in ${group.status}: ${entry.startTime} - ${entry.endTime}`);
            return null;
          }

          // Create full Date objects based on baseDate
          const startTime = new Date(baseDate);
          startTime.setHours(startMoment.hours(), startMoment.minutes(), 0, 0);

          const endTime = new Date(baseDate);
          endTime.setHours(endMoment.hours(), endMoment.minutes(), 0, 0);

          // Handle endTime wrapping to next day if smaller than startTime
          if (endTime < startTime) {
            endTime.setDate(endTime.getDate() + 1);
          }

          return {
            status: group.status,
            startTime,
            endTime,
          };
        } catch (error) {
          console.warn(`Error processing timeline for ${group.status}:`, error);
          return null;
        }
      })
      .filter((item): item is { status: string; startTime: Date; endTime: Date } => item !== null)
  );

  // Apply date range filtering if provided
  const filteredData = dateRange?.from && dateRange?.to
    ? processedData.filter((bar) => bar.startTime >= dateRange.from! && bar.endTime <= dateRange.to!)
    : processedData;

  interface StateConfig {
    order: number;
    label: string;
    color: string;
    style: {
      fontWeight: number;
      fontSize: string;
      textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
    };
  }

  // State configuration with styling
  const stateConfig: Record<string, StateConfig> = {
    error: {
      order: 1,
      label: "Error",
      color: "#FCA5A5",
      style: { fontWeight: 400, fontSize: "14px", textTransform: "uppercase" }
    },
    active: {
      order: 2,
      label: "Active",
      color: "#BAE6FD",
      style: { fontWeight: 400, fontSize: "14px" }
    },
    idle: {
      order: 3,
      label: "Idle",
      color: "#94A3B8",
      style: { fontWeight: 400, fontSize: "14px" }
    },
    charging: {
      order: 4,
      label: "Charging",
      color: "#86EFAC",
      style: { fontWeight: 400, fontSize: "14px" }
    },
    connected: {
      order: 5,
      label: "Connected",
      color: "#C7D2FE",
      style: { fontWeight: 400, fontSize: "14px" }
    }
  };

  // Fixed order of states
  const stateOrder = ["error", "active", "idle", "charging", "connected"];

  // Get unique states from data
  const uniqueStates = stateOrder.filter((state) => filteredData.some((bar) => bar.status === state));

  // Helper function to capitalize status names
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  // Merge overlapping bars per status
  const mergeBars = (bars: typeof filteredData): typeof filteredData => {
    if (bars.length <= 1) return bars;
    const sorted = [...bars].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    const merged: typeof filteredData = [];
    let current = { ...sorted[0] };

    for (let i = 1; i < sorted.length; i++) {
      const next = sorted[i];
      const currentEnd = current.endTime.getTime();
      const nextStart = next.startTime.getTime();

      if (currentEnd >= nextStart) {
        current.endTime = new Date(Math.max(currentEnd, next.endTime.getTime()));
      } else {
        merged.push(current);
        current = { ...next };
      }
    }
    merged.push(current);
    return merged;
  };

  // Group and merge data by status
  const groupedData: Record<string, typeof filteredData> = {};
  filteredData.forEach((bar) => {
    if (!groupedData[bar.status]) groupedData[bar.status] = [];
    groupedData[bar.status].push(bar);
  });

  uniqueStates.forEach((status) => {
    if (groupedData[status]) {
      groupedData[status] = mergeBars(groupedData[status]);
    }
  });

  // Prepare series data with proper color mapping
  const flatData = uniqueStates.flatMap((status) =>
    (groupedData[status] || []).map((bar) => ({
      x: capitalize(status),
      y: [bar.startTime.getTime(), bar.endTime.getTime()],
      fillColor: stateConfig[status].color || "#6b7280", // Use status color or fallback
    }))
  );

  const series = [{ data: flatData }];

  // Calculate chart bounds based on actual data times
  const allTimes = filteredData.flatMap((bar) => [bar.startTime.getTime(), bar.endTime.getTime()]);

  // Find the earliest time from the actual data
  const earliestTime = Math.min(...allTimes);

  // Set bounds to start from earliest time and extend to midnight
  const adjustedMinX = earliestTime;
  const endOfDay = new Date(baseDate);
  endOfDay.setHours(24, 0, 0, 0);
  const adjustedMaxX = endOfDay.getTime();

  // ApexCharts configuration with proper color handling and scrolling disabled
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "rangeBar",
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: [number, number]) {
        const duration = (val[1] - val[0]) / (60 * 60 * 1000);
        return duration.toFixed(1) + "h";
      },
      style: {
        fontSize: "12px",
        colors: ["#000"]
      }
    },
    fill: {
      type: "solid",
      opacity: 0.8,
      colors: undefined
    },
    xaxis: {
      type: "datetime",
      min: adjustedMinX,
      max: adjustedMaxX,
      tickAmount: 14, // Increased ticks to show more time points up to midnight
      labels: {
        format: "HH:mm",
        style: {
          fontSize: "12px"
        },
        datetimeUTC: false // Ensure local time display
      },
    },
    yaxis: {
      reversed: false,
      labels: {
        style: {
          fontSize: "12px"
        }
      }
    },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } }
    },
    // legend: { show: true },
    tooltip: {
      x: {
        format: "HH:mm"
      }
    }
  };

  return (
    <TooltipProvider>
      <Card className="bg-slate-50 shadow-sm rounded-lg overflow-hidden">
        <CardContent className="p-6">
          {/* <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-medium mb-1">Time Spent</h2>
                <p className="text-sm text-gray-600">
                  What did the devices do during the day?
                </p>
              </div>
              <div className="flex items-center gap-4">
                <DateRangeFilter onDateRangeChange={handleDateRangeChange} />
                {!robotId && (
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
                )}
              </div>
            </div>
          </div> */}

          {/* ApexCharts Integration */}
          <div className="relative mt-8">
            <Chart options={options} series={series} type="rangeBar" height={350} />
          </div>

          {/* Custom Legend */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            {uniqueStates.map((state) => (
              <Tooltip key={state}>
                <TooltipTrigger asChild>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: stateConfig[state].color }}
                    />
                    <span style={stateConfig[state].style}>
                      {stateConfig[state].label}
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">Status: {stateConfig[state].label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
