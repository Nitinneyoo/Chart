"use client";

import {
	BarChart3,
	CheckCircle,
	FolderCheck,
	FolderUp,
	FolderX,
	XCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricsCardsProps {
	activeView: "volume" | "success";
	data?: {
		successRate: number;
		assignedRequests: number;
		completedRequests: number;
		failedRequests: number;
	};
}

export default function MetricsCards({ activeView, data }: MetricsCardsProps) {
	const defaultData = {
		successRate: 88,
		assignedRequests: activeView === "volume" ? 22 : 45,
		completedRequests: 40,
		failedRequests: 5,
	};

	const metricsData = data || defaultData;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
			<Card className="py-0 gap-0 p-2 bg-[#F0FDF4] border border-[#16A34A] rounded-md">
				<CardContent className="flex flex-row items-center justify-start w-full p-0">
					<span className="flex items-center justify-center rounded-sm bg-[#DCFCE7] w-12 h-12">
						<img src="/insights.svg" alt="Success Rate" className="w-6 h-6" />
					</span>
					<div className="flex flex-col items-start ml-3">
						<div className="text-xs font-medium text-gray-600 mb-0.5">
							Success Rate (%)
						</div>
						<div className="text-xl font-bold text-green-600">
							{metricsData.successRate}%
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="py-0 gap-0 p-2 shadow rounded-md">
				<CardContent className="flex flex-row items-center justify-start w-full p-0">
					<span className="flex items-center justify-center rounded-sm bg-[#E0F2FE] w-12 h-12">
						<FolderUp className="w-6 h-6 text-[#0369A1]" />
					</span>
					<div className="flex flex-col items-start ml-3">
						<div className="text-xs font-medium text-gray-600 mb-0.5">
							Assigned Requests
						</div>
						<div className="text-xl font-bold text-blue-600">
							{metricsData.assignedRequests}
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="py-0 gap-0 p-2 rounded-md">
				<CardContent className="flex flex-row items-center justify-start w-full p-0">
					<span className="flex items-center justify-center rounded-sm bg-[#DCFCE7] w-12 h-12">
						<FolderCheck className="w-6 h-6 text-[#166534]" />
					</span>
					<div className="flex flex-col items-start ml-3">
						<div className="text-xs font-medium text-gray-600 mb-0.5">
							Completed Requests
						</div>
						<div className="text-xl font-bold text-green-600">
							{metricsData.completedRequests}
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="py-0 gap-0 p-2 rounded-md">
				<CardContent className="flex flex-row items-center justify-start w-full p-0">
					<span className="flex items-center justify-center rounded-sm bg-[#FEE2E2] w-12 h-12">
						<FolderX className="w-6 h-6 text-[#991B1B]" />
					</span>
					<div className="flex flex-col items-start ml-3">
						<div className="text-xs font-medium text-gray-600 mb-0.5">
							Failed Requests
						</div>
						<div className="text-xl font-bold text-red-600">
							{metricsData.failedRequests}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
