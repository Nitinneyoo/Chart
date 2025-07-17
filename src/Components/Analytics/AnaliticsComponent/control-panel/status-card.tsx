import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatusCardProps {
	title: string;
	count: number;
	description: string;
	icon: LucideIcon;
	bgColor: string;
	iconColor: string;
}

export function StatusCard({
	title,
	count,
	description,
	icon: Icon,
	bgColor,
	iconColor,
}: StatusCardProps) {
	return (
		<Card className={`${bgColor} border-0 p-0`}>
			<CardContent className="p-0">
				<div className="flex items-center gap-3 min-h-0 p-2">
					<div
						className={`flex-shrink-0 flex items-center justify-center ${iconColor} rounded-md h-12 w-12 `}
						style={{ marginLeft: 0, marginTop: 0 }}
					>
						<Icon className="h-7 w-7" />
					</div>
					<div className="flex-1 py-2 pl-1">
						<div className="text-sm font-medium text-gray-600 mb-1">
							{title}
						</div>
						<div className="text-2xl font-bold text-gray-900 mb-1">{count}</div>
						<div className="text-xs text-gray-500">{description}</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
