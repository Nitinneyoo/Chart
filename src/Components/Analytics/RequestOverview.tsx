
import { ResponsiveContainer } from "recharts";
import MetricsCards from "./MetricsCards";
import ChartSection from "./ChartSection";
import PeakActivityTimeline from "./PeakActivityTimeline";
import {
	ChartData,
	MetricsData,
	SuccessRateData,
	type TimePeriod,
} from "../../data/mockAnalyticsData";
import { useState } from "react";

const TimeLineData = [
    {
        "timestamp": "Jul 17th 1 AM",
        "total": 4,
        "success": 4,
        "l": "Jul 17th 1 AM - 2 AM"
    },
    {
        "timestamp": "Jul 17th 2 AM",
        "total": 2,
        "success": 2,
        "l": "Jul 17th 2 AM - 3 AM"
    },
    {
        "timestamp": "Jul 17th 6 AM",
        "total": 4,
        "success": 3,
        "l": "Jul 17th 6 AM - 7 AM"
    },
    {
        "timestamp": "Jul 17th 10 AM",
        "total": 1,
        "success": 0,
        "l": "Jul 17th 10 AM - 11 AM"
    },
    {
        "timestamp": "Jul 17th 11 AM",
        "total": 3,
        "success": 3,
        "l": "Jul 17th 11 AM - 12 PM"
    },
    {
        "timestamp": "Jul 17th 12 PM",
        "total": 5,
        "success": 2,
        "l": "Jul 17th 12 PM - 1 PM"
    },
    {
        "timestamp": "Jul 17th 1 PM",
        "total": 4,
        "success": 4,
        "l": "Jul 17th 1 PM - 2 PM"
    },
    {
        "timestamp": "Jul 17th 2 PM",
        "total": 1,
        "success": 1,
        "l": "Jul 17th 2 PM - 3 PM"
    },
    {
        "timestamp": "Jul 17th 8 PM",
        "total": 2,
        "success": 0,
        "l": "Jul 17th 8 PM - 9 PM"
    },
    {
        "timestamp": "Jul 17th 9 PM",
        "total": 1,
        "success": 0,
        "l": "Jul 17th 9 PM - 10 PM"
    },
    {
        "timestamp": "Jul 17th 11 PM",
        "total": 1,
        "success": 0,
        "l": "Jul 17th 11 PM - 12 AM"
    },
    {
        "timestamp": "Jul 18th 12 AM",
        "total": 2,
        "success": 0,
        "l": "Jul 18th 12 AM - 1 AM"
    },
    {
        "timestamp": "Jul 18th 10 AM",
        "total": 4,
        "success": 0,
        "l": "Jul 18th 10 AM - 11 AM"
    },
    {
        "timestamp": "Jul 18th 4 PM",
        "total": 2,
        "success": 0,
        "l": "Jul 18th 4 PM - 5 PM"
    },
    {
        "timestamp": "Jul 18th 5 PM",
        "total": 3,
        "success": 2,
        "l": "Jul 18th 5 PM - 6 PM"
    },
    {
        "timestamp": "Jul 18th 6 PM",
        "total": 3,
        "success": 2,
        "l": "Jul 18th 6 PM - 7 PM"
    },
    {
        "timestamp": "Jul 18th 7 PM",
        "total": 1,
        "success": 0,
        "l": "Jul 18th 7 PM - 8 PM"
    },
    {
        "timestamp": "Jul 18th 11 PM",
        "total": 3,
        "success": 1,
        "l": "Jul 18th 11 PM - 12 AM"
    },
    {
        "timestamp": "Jul 19th 12 AM",
        "total": 4,
        "success": 2,
        "l": "Jul 19th 12 AM - 1 AM"
    },
    {
        "timestamp": "Jul 19th 2 AM",
        "total": 2,
        "success": 1,
        "l": "Jul 19th 2 AM - 3 AM"
    },
    {
        "timestamp": "Jul 19th 10 AM",
        "total": 6,
        "success": 2,
        "l": "Jul 19th 10 AM - 11 AM"
    },
    {
        "timestamp": "Jul 19th 11 AM",
        "total": 3,
        "success": 1,
        "l": "Jul 19th 11 AM - 12 PM"
    },
    {
        "timestamp": "Jul 19th 12 PM",
        "total": 3,
        "success": 1,
        "l": "Jul 19th 12 PM - 1 PM"
    },
    {
        "timestamp": "Jul 19th 1 PM",
        "total": 3,
        "success": 3,
        "l": "Jul 19th 1 PM - 2 PM"
    },
    {
        "timestamp": "Jul 19th 2 PM",
        "total": 3,
        "success": 3,
        "l": "Jul 19th 2 PM - 3 PM"
    },
    {
        "timestamp": "Jul 19th 3 PM",
        "total": 7,
        "success": 7,
        "l": "Jul 19th 3 PM - 4 PM"
    },
    {
        "timestamp": "Jul 19th 4 PM",
        "total": 12,
        "success": 10,
        "l": "Jul 19th 4 PM - 5 PM"
    },
    {
        "timestamp": "Jul 19th 5 PM",
        "total": 11,
        "success": 9,
        "l": "Jul 19th 5 PM - 6 PM"
    },
    {
        "timestamp": "Jul 19th 7 PM",
        "total": 7,
        "success": 7,
        "l": "Jul 19th 7 PM - 8 PM"
    },
    {
        "timestamp": "Jul 19th 8 PM",
        "total": 4,
        "success": 4,
        "l": "Jul 19th 8 PM - 9 PM"
    },
    {
        "timestamp": "Jul 19th 9 PM",
        "total": 4,
        "success": 2,
        "l": "Jul 19th 9 PM - 10 PM"
    },
    {
        "timestamp": "Jul 19th 10 PM",
        "total": 4,
        "success": 2,
        "l": "Jul 19th 10 PM - 11 PM"
    },
    {
        "timestamp": "Jul 19th 11 PM",
        "total": 1,
        "success": 1,
        "l": "Jul 19th 11 PM - 12 AM"
    },
    {
        "timestamp": "Jul 20th 12 AM",
        "total": 9,
        "success": 6,
        "l": "Jul 20th 12 AM - 1 AM"
    },
    {
        "timestamp": "Jul 20th 1 AM",
        "total": 4,
        "success": 1,
        "l": "Jul 20th 1 AM - 2 AM"
    },
    {
        "timestamp": "Jul 20th 2 AM",
        "total": 4,
        "success": 1,
        "l": "Jul 20th 2 AM - 3 AM"
    },
    {
        "timestamp": "Jul 20th 3 AM",
        "total": 3,
        "success": 2,
        "l": "Jul 20th 3 AM - 4 AM"
    },
    {
        "timestamp": "Jul 20th 4 AM",
        "total": 6,
        "success": 5,
        "l": "Jul 20th 4 AM - 5 AM"
    },
    {
        "timestamp": "Jul 20th 5 AM",
        "total": 6,
        "success": 4,
        "l": "Jul 20th 5 AM - 6 AM"
    },
    {
        "timestamp": "Jul 20th 6 AM",
        "total": 7,
        "success": 5,
        "l": "Jul 20th 6 AM - 7 AM"
    },
    {
        "timestamp": "Jul 20th 10 AM",
        "total": 8,
        "success": 5,
        "l": "Jul 20th 10 AM - 11 AM"
    },
    {
        "timestamp": "Jul 20th 11 AM",
        "total": 3,
        "success": 2,
        "l": "Jul 20th 11 AM - 12 PM"
    },
    {
        "timestamp": "Jul 20th 12 PM",
        "total": 4,
        "success": 4,
        "l": "Jul 20th 12 PM - 1 PM"
    },
    {
        "timestamp": "Jul 20th 1 PM",
        "total": 8,
        "success": 7,
        "l": "Jul 20th 1 PM - 2 PM"
    },
    {
        "timestamp": "Jul 20th 2 PM",
        "total": 8,
        "success": 6,
        "l": "Jul 20th 2 PM - 3 PM"
    },
    {
        "timestamp": "Jul 20th 4 PM",
        "total": 12,
        "success": 12,
        "l": "Jul 20th 4 PM - 5 PM"
    },
    {
        "timestamp": "Jul 20th 5 PM",
        "total": 13,
        "success": 11,
        "l": "Jul 20th 5 PM - 6 PM"
    },
    {
        "timestamp": "Jul 20th 6 PM",
        "total": 8,
        "success": 8,
        "l": "Jul 20th 6 PM - 7 PM"
    },
    {
        "timestamp": "Jul 20th 7 PM",
        "total": 12,
        "success": 12,
        "l": "Jul 20th 7 PM - 8 PM"
    },
    {
        "timestamp": "Jul 20th 8 PM",
        "total": 12,
        "success": 12,
        "l": "Jul 20th 8 PM - 9 PM"
    },
    {
        "timestamp": "Jul 20th 9 PM",
        "total": 20,
        "success": 17,
        "l": "Jul 20th 9 PM - 10 PM"
    },
    {
        "timestamp": "Jul 20th 10 PM",
        "total": 4,
        "success": 4,
        "l": "Jul 20th 10 PM - 11 PM"
    },
    {
        "timestamp": "Jul 20th 11 PM",
        "total": 7,
        "success": 2,
        "l": "Jul 20th 11 PM - 12 AM"
    },
    {
        "timestamp": "Jul 21st 12 AM",
        "total": 3,
        "success": 1,
        "l": "Jul 21st 12 AM - 1 AM"
    },
    {
        "timestamp": "Jul 21st 1 AM",
        "total": 23,
        "success": 21,
        "l": "Jul 21st 1 AM - 2 AM"
    },
    {
        "timestamp": "Jul 21st 2 AM",
        "total": 4,
        "success": 2,
        "l": "Jul 21st 2 AM - 3 AM"
    },
    {
        "timestamp": "Jul 21st 3 AM",
        "total": 11,
        "success": 7,
        "l": "Jul 21st 3 AM - 4 AM"
    },
    {
        "timestamp": "Jul 21st 4 AM",
        "total": 3,
        "success": 3,
        "l": "Jul 21st 4 AM - 5 AM"
    },
    {
        "timestamp": "Jul 21st 11 AM",
        "total": 8,
        "success": 5,
        "l": "Jul 21st 11 AM - 12 PM"
    },
    {
        "timestamp": "Jul 21st 12 PM",
        "total": 4,
        "success": 4,
        "l": "Jul 21st 12 PM - 1 PM"
    },
    {
        "timestamp": "Jul 21st 1 PM",
        "total": 7,
        "success": 4,
        "l": "Jul 21st 1 PM - 2 PM"
    },
    {
        "timestamp": "Jul 21st 2 PM",
        "total": 4,
        "success": 3,
        "l": "Jul 21st 2 PM - 3 PM"
    },
    {
        "timestamp": "Jul 21st 4 PM",
        "total": 4,
        "success": 2,
        "l": "Jul 21st 4 PM - 5 PM"
    },
    {
        "timestamp": "Jul 21st 5 PM",
        "total": 5,
        "success": 5,
        "l": "Jul 21st 5 PM - 6 PM"
    },
    {
        "timestamp": "Jul 21st 6 PM",
        "total": 8,
        "success": 8,
        "l": "Jul 21st 6 PM - 7 PM"
    },
    {
        "timestamp": "Jul 21st 7 PM",
        "total": 7,
        "success": 7,
        "l": "Jul 21st 7 PM - 8 PM"
    },
    {
        "timestamp": "Jul 21st 8 PM",
        "total": 4,
        "success": 4,
        "l": "Jul 21st 8 PM - 9 PM"
    },
    {
        "timestamp": "Jul 21st 9 PM",
        "total": 8,
        "success": 6,
        "l": "Jul 21st 9 PM - 10 PM"
    },
    {
        "timestamp": "Jul 21st 10 PM",
        "total": 4,
        "success": 4,
        "l": "Jul 21st 10 PM - 11 PM"
    },
    {
        "timestamp": "Jul 21st 11 PM",
        "total": 6,
        "success": 4,
        "l": "Jul 21st 11 PM - 12 AM"
    },
    {
        "timestamp": "Jul 22nd 12 AM",
        "total": 9,
        "success": 8,
        "l": "Jul 22nd 12 AM - 1 AM"
    },
    {
        "timestamp": "Jul 22nd 1 AM",
        "total": 6,
        "success": 6,
        "l": "Jul 22nd 1 AM - 2 AM"
    },
    {
        "timestamp": "Jul 22nd 2 AM",
        "total": 11,
        "success": 11,
        "l": "Jul 22nd 2 AM - 3 AM"
    },
    {
        "timestamp": "Jul 22nd 3 AM",
        "total": 5,
        "success": 5,
        "l": "Jul 22nd 3 AM - 4 AM"
    },
    {
        "timestamp": "Jul 22nd 4 AM",
        "total": 1,
        "success": 1,
        "l": "Jul 22nd 4 AM - 5 AM"
    },
    {
        "timestamp": "Jul 22nd 10 AM",
        "total": 3,
        "success": 2,
        "l": "Jul 22nd 10 AM - 11 AM"
    },
    {
        "timestamp": "Jul 22nd 11 AM",
        "total": 13,
        "success": 5,
        "l": "Jul 22nd 11 AM - 12 PM"
    }
]

export default function RequestsOverview() {
	const [activeView, setActiveView] = useState<"volume" | "success">("volume");
	const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("30days");

	const metricsData = MetricsData["all"][selectedPeriod];
	const requestsData = ChartData["all"][selectedPeriod];
	const successRateData = SuccessRateData["all"][selectedPeriod];
	const processedTimeline = TimeLineData.map((item) => ({
		...item,
		period: selectedPeriod,
		orders: item.total < 0 ? 0 : item.total,
	}));

	return (
		<div className="space-y-6">
			<MetricsCards activeView={activeView} data={metricsData} />

			<ResponsiveContainer width="100%">
				<ChartSection
                    activeView={activeView}
                    requestsData={requestsData}
                    successRateData={successRateData}
                    onViewChange={setActiveView}
                    onPeriodChange={(period) => setSelectedPeriod(period as TimePeriod)} yAxisDomain={undefined}				/>
			</ResponsiveContainer>

			<div className="ml-2 text-[#005EB8] font-medium text-[20px]">
				Peak Activity Timeline
			</div>
			<ResponsiveContainer width="100%">
				<PeakActivityTimeline timelineData={processedTimeline} />
			</ResponsiveContainer>
		</div>
	);
}
