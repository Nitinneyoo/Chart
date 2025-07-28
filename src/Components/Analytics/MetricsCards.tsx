import { Card, CardContent } from "@/components/ui/card";
import { FolderCheck, FolderUp, FolderX,type LucideIcon } from "lucide-react";
import React from "react";

interface MetricCardProps {
  icon: LucideIcon | React.ReactNode;
  label: string;
  value: string | number;
  bgColor: string;
  iconBgColor: string;
  iconColor?: string;
  borderColor?: string;
}

const MetricCard = ({ icon, label, value, bgColor, iconBgColor, iconColor, borderColor = "#E2E8F0" }: MetricCardProps) => {
  const IconComponent = icon as LucideIcon;

  return (
    <Card className={`py-0 gap-0 p-2 ${bgColor} border rounded-md flex-1 min-w-[200px] shadow-sm`} style={{ borderColor }}>
      <CardContent className="flex flex-row items-center justify-start w-full p-0 flex-wrap">
        <span className={`flex items-center justify-center rounded-sm ${iconBgColor} w-12 h-12`}>
          {React.isValidElement(icon) ? (
            icon
          ) : (
            <IconComponent className={`w-6 h-6 ${iconColor || "text-[#0369A1]"}`} />
          )}
        </span>
        <div className="flex flex-col items-start ml-3 min-w-0 flex-1">
          <div className="text-base font-medium text-slate-900 mb-0.5 break-words">
            {label}
          </div>
          <div className="text-xl font-semibold">
            {value}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full overflow-x-auto">
      <MetricCard
        icon={<img src="/insights.svg" alt="Success Rate" className="w-6 h-6" />}
        label="Success Rate (%)"
        value={`${metricsData.successRate}%`}
        bgColor="bg-[#F0FDF4]"
        iconBgColor="bg-[#DCFCE7]"
        borderColor="#16A34A"
      />
      <MetricCard
        icon={FolderUp}
        label="Assigned Requests"
        value={metricsData.assignedRequests}
        bgColor="bg-white shadow"
        iconBgColor="bg-[#E0F2FE]"
        iconColor="blue"
      />
      <MetricCard
        icon={FolderCheck}
        label="Completed Requests"
        value={metricsData.completedRequests}
        bgColor="bg-white"
        iconBgColor="bg-[#DCFCE7]"
        iconColor="#ffffff"
      />
      <MetricCard
        icon={FolderX}
        label="Failed Requests"
        value={metricsData.failedRequests}
        bgColor="bg-white"
        iconBgColor="bg-[#FEE2E2]"
        iconColor="#475569"
      />
    </div>
  );
}