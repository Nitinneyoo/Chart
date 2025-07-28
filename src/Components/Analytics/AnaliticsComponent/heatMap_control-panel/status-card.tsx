import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatusCardProps {
	title: string;
	count: number;
	description: string;
	icon: LucideIcon;

	iconColor: string;
}

export function StatusCard({
	title,
	count,
	description,
	icon: Icon,
	iconColor,
}: StatusCardProps) {
	return (
		<Card className={`border-0 p-0`}>
			<CardContent className="p-0">
				<div className="flex items-center gap-2 min-h-0 ml-2">
					<div
						className={`flex-shrink-0 flex items-center justify-center ${iconColor} rounded-md h-[64px] w-[46px] `}
						style={{ marginLeft: 0, marginTop: 0 }}
					>
						<Icon className="h-7 w-7" />
					</div>
					<div className="flex-1 py-2 pl-1">
						<div className="text-sm font-medium text-[#0F172A]">{title}</div>
						<div className="text-2xl font-bold text-[#0F172A]">{count}</div>
						<div className="text-xs text-[#64748B]">{description}</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
