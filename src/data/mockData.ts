// Mock data for Timeline Chart
export interface TimelineBar {
	status: "error" | "active" | "idle" | "charging" | "connected";
	startTime: string;
	duration: number; // in percentage
	color: string;
	position: {
		top: string;
		left: string;
	};
}

export const mockTimelineDataNew = {
	"all-robots": [
		{
			status: "error",
			timeline: [
				{ startTime: "13:00", endTime: "14:00" },
			],
		},
		{
			status: "active",
			timeline: [

				{ startTime: "10:30", endTime: "11:45" },
				{ startTime: "12:02", endTime: "13:00" },

				{ startTime: "15:30", endTime: "16:45" },


				{ startTime: "17:00", endTime: "18:26" },


				{ startTime: "19:00", endTime: "19:51" },
				{ startTime: "20:30", endTime: "23:06" },
			],
		},
		{
			status: "idle",
			timeline: [

				{ startTime: "11:45", endTime: "12:02" },


				{ startTime: "16:45", endTime: "17:00" },

				{ startTime: "18:45", endTime: "19:00" },


				{ startTime: "20:15", endTime: "20:28" },

				// { startTime: "02:15", endTime: "04:30" }
			],
		},
		{
			status: "charging",
			timeline: [

				{ startTime: "14:00", endTime: "15:30" },
			],
		},
		{

			status: "connected",
			timeline: [
				{ startTime: "10:00", endTime: "22:48" },
			],
		},
	],
};


// Mock data for Peak Activity
export const mockPeakActivityData = {
	"all-robots": [
		{ time: "10:00", value: 45 },
		{ time: "11:00", value: 35 },
		{ time: "12:00", value: 65 },
		{ time: "13:00", value: 55 },
		{ time: "14:00", value: 85 },
		{ time: "15:00", value: 75 },
		{ time: "16:00", value: 25 },
		{ time: "17:00", value: 55 },
		{ time: "18:00", value: 45 },
		{ time: "19:00", value: 15 },
		{ time: "20:00", value: 75 },
		{ time: "21:00", value: 45 },
		{ time: "22:00", value: 65 },
		{ time: "23:00", value: 45 },
		{ time: "24:00", value: 65 },
		{ time: "00:00", value: 55 },
	],
	"robot-1": [
		{ time: "10:00", value: 35 },
		{ time: "11:00", value: 25 },
		{ time: "12:00", value: 55 },
		{ time: "13:00", value: 45 },
		{ time: "14:00", value: 75 },
		{ time: "15:00", value: 65 },
		{ time: "16:00", value: 15 },
		{ time: "17:00", value: 45 },
		{ time: "18:00", value: 35 },
		{ time: "19:00", value: 10 },
		{ time: "20:00", value: 65 },
		{ time: "21:00", value: 35 },
		{ time: "22:00", value: 55 },
		{ time: "23:00", value: 35 },
		{ time: "24:00", value: 55 },
		{ time: "00:00", value: 45 },
	],
	"robot-2": [
		{ time: "10:00", value: 25 },
		{ time: "11:00", value: 45 },
		{ time: "12:00", value: 35 },
		{ time: "13:00", value: 65 },
		{ time: "14:00", value: 55 },
		{ time: "15:00", value: 85 },
		{ time: "16:00", value: 35 },
		{ time: "17:00", value: 25 },
		{ time: "18:00", value: 55 },
		{ time: "19:00", value: 25 },
		{ time: "20:00", value: 45 },
		{ time: "21:00", value: 55 },
		{ time: "22:00", value: 35 },
		{ time: "23:00", value: 65 },
		{ time: "24:00", value: 45 },
		{ time: "00:00", value: 35 },
	],
};

export const mockPeakActivityInfo = {
	"all-robots": {
		peakHours: "9:00 AM - 10:00 AM",
		maxMissions: "210",
	},
	"robot-1": {
		peakHours: "8:30 AM - 9:30 AM",
		maxMissions: "120",
	},
	"robot-2": {
		peakHours: "10:15 AM - 11:15 AM",
		maxMissions: "90",
	},
};

// Mock data for Robot Utilization
export const mockUtilizationData = {
	robotOptions: [
		{ value: "AR2002026", label: "AR2002026" },
		{ value: "AR2002027", label: "AR2002027" },
		{ value: "AR2002028", label: "AR2002028" },
	],
	AR2002026: {
		activeTime: "7 Hours",
		idleTime: "2 Hours",
		utilizationRate: "70%",
	},
	AR2002027: {
		activeTime: "5 Hours",
		idleTime: "3 Hours",
		utilizationRate: "62%",
	},
	AR2002028: {
		activeTime: "8 Hours",
		idleTime: "1 Hour",
		utilizationRate: "85%",
	},
};

// Mock data for Request Fulfillment Overview
export const mockFulfillmentData = {
	totalAssigned: 45,
	completed: 40,
	failed: 5,
	successRate: "88%",
};
