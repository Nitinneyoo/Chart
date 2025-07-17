export type TimePeriod = "24hours" | "7days" | "30days" | "custom";
export type RobotId = "all" | "ARTOO2025" | "ARTOO2026" | "ARTOO2027";

export interface MetricsData {
	successRate: number;
	assignedRequests: number;
	completedRequests: number;
	failedRequests: number;
}

export interface ChartData {
	date: string;
	assigned: number;
	completed: number;
}

export interface SuccessRateData {
	date: string;
	rate: number;
}

export interface TimelineData {
	time: string;
	orders: number;
}

export interface RobotUtilizationData {
	robotUtilization: number;
	chargeCycles: number;
	activeTime: string;
	idleTime: string;
	chargingTime: string;
	errorTime: string;
}

// Mock data generator functions
export const generateMetricsData = (
	robot: RobotId,
	period: TimePeriod,
): MetricsData => {
	const baseData = {
		all: {
			successRate: 88,
			assignedRequests: 45,
			completedRequests: 40,
			failedRequests: 5,
		},
		ARTOO2025: {
			successRate: 92,
			assignedRequests: 15,
			completedRequests: 14,
			failedRequests: 1,
		},
		ARTOO2026: {
			successRate: 85,
			assignedRequests: 18,
			completedRequests: 15,
			failedRequests: 3,
		},
		ARTOO2027: {
			successRate: 90,
			assignedRequests: 12,
			completedRequests: 11,
			failedRequests: 1,
		},
	};

	const periodMultiplier = {
		"24hours": 0.3,
		"7days": 1,
		"30days": 4,
		custom: 2,
	};

	const data = baseData[robot];
	const multiplier = periodMultiplier[period];

	return {
		successRate: data.successRate,
		assignedRequests: Math.round(data.assignedRequests * multiplier),
		completedRequests: Math.round(data.completedRequests * multiplier),
		failedRequests: Math.round(data.failedRequests * multiplier),
	};
};

export const generateChartData = (
	robot: RobotId,
	period: TimePeriod,
): ChartData[] => {
	const periods = {
		"24hours": Array.from({ length: 24 }, (_, i) => `${i}:00`),
		"7days": Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
		"30days": Array.from({ length: 30 }, (_, i) => `${i + 1} Mar`),
		custom: Array.from({ length: 10 }, (_, i) => `${i + 12} Mar`),
	};

	const robotMultiplier = {
		all: 1,
		ARTOO2025: 0.4,
		ARTOO2026: 0.35,
		ARTOO2027: 0.25,
	};

	// Use seeded values instead of random
	const baseAssigned = [80, 100, 120, 110, 280, 100, 60, 180, 100, 160];
	const baseCompleted = [75, 95, 110, 105, 260, 90, 55, 170, 95, 150];

	return periods[period].map((date, index) => ({
		date,
		assigned: Math.round(
			baseAssigned[index % baseAssigned.length] * robotMultiplier[robot],
		),
		completed: Math.round(
			baseCompleted[index % baseCompleted.length] * robotMultiplier[robot],
		),
	}));
};

export const generateSuccessRateData = (
	robot: RobotId,
	period: TimePeriod,
): SuccessRateData[] => {
	const periods = {
		"24hours": Array.from({ length: 24 }, (_, i) => `${i}:00`),
		"7days": Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
		"30days": Array.from({ length: 30 }, (_, i) => `${i + 1}`),
		custom: Array.from({ length: 10 }, (_, i) => `${i + 12}`),
	};

	const robotBaseRate = {
		all: 88,
		ARTOO2025: 92,
		ARTOO2026: 85,
		ARTOO2027: 90,
	};

	// Use seeded values instead of random
	const variations = [
		2, -1, 3, 1, -2, 4, -3, 2, 1, -1, 3, -2, 1, 4, -1, 2, -3, 1, 3, -2,
	];

	return periods[period].map((date, index) => ({
		date,
		rate: Math.max(
			70,
			Math.min(
				100,
				robotBaseRate[robot] + variations[index % variations.length],
			),
		),
	}));
};

export const generateTimelineData = (
	robot: RobotId,
	period: TimePeriod,
): TimelineData[] => {
	const robotMultiplier = {
		all: 1,
		ARTOO2025: 0.4,
		ARTOO2026: 0.35,
		ARTOO2027: 0.25,
	};

	// Generate data for 10 hours (10:00 to 19:50) with 10-minute intervals
	return Array.from({ length: 10 * 6 }, (_, i) => {
		const hour = Math.floor(i / 6) + 10;
		const minute = (i % 6) * 10;
		const baseValue =
			15 + Math.sin((hour - 10) * 0.5) * 20 + Math.random() * 15;

		return {
			time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
			orders: Math.round(baseValue * robotMultiplier[robot]),
		};
	});
};

export const generateRobotUtilizationData = (
	robot: RobotId,
	period: TimePeriod,
): RobotUtilizationData => {
	const baseData = {
		all: {
			robotUtilization: 70,
			chargeCycles: 150,
			activeTime: "7 hours",
			idleTime: "42 Minutes",
			chargingTime: "6 hours",
			errorTime: "1 hours",
		},
		ARTOO2025: {
			robotUtilization: 85,
			chargeCycles: 45,
			activeTime: "8.5 hours",
			idleTime: "30 Minutes",
			chargingTime: "5 hours",
			errorTime: "30 Minutes",
		},
		ARTOO2026: {
			robotUtilization: 65,
			chargeCycles: 52,
			activeTime: "6.5 hours",
			idleTime: "1 hour",
			chargingTime: "6.5 hours",
			errorTime: "1.5 hours",
		},
		ARTOO2027: {
			robotUtilization: 78,
			chargeCycles: 38,
			activeTime: "7.8 hours",
			idleTime: "25 Minutes",
			chargingTime: "5.5 hours",
			errorTime: "45 Minutes",
		},
	};

	const periodMultiplier = {
		"24hours": 1,
		"7days": 7,
		"30days": 30,
		custom: 14,
	};

	const data = baseData[robot];
	const multiplier = periodMultiplier[period];

	return {
		...data,
		chargeCycles: Math.round(data.chargeCycles * multiplier),
	};
};
