import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
}

export function InfoCard({ title, value, icon: Icon, bgColor, iconBgColor, iconColor }: InfoCardProps) {
  return (
    <Card className={`${bgColor} border-opacity-20 flex-1 max-w-[380px]`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-6" >
          <div className={`p-2 ${iconBgColor} rounded-lg flex-shrink-0`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-600 mb-1 truncate">{title}</p>
            <p className="text-lg font-semibold text-gray-900 truncate">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}