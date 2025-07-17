import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function ControlPanel() {
	return (
		<div className="bg-white p-4 rounded-lg border">
			<div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
				<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
					<div className="flex flex-col gap-2">
						<Label className="text-sm font-medium text-blue-600">
							Heatmap Type
						</Label>
						<Select defaultValue="congestion">
							<SelectTrigger className="w-48">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="congestion">Congestion Zones</SelectItem>
								<SelectItem value="traffic">Traffic Flow</SelectItem>
								<SelectItem value="battery">Battery Levels</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-2">
						<Label className="text-sm font-medium text-gray-600">Filter</Label>
						<Select defaultValue="all">
							<SelectTrigger className="w-32">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Robots</SelectItem>
								<SelectItem value="active">Active Only</SelectItem>
								<SelectItem value="idle">Idle Only</SelectItem>
								<SelectItem value="charging">Charging Only</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
					<div className="flex gap-2">
						<Button variant="ghost" size="sm" className="text-gray-600">
							Last 24 Hours
						</Button>
						<Button variant="ghost" size="sm" className="text-gray-600">
							Last 7 Days
						</Button>
						<Button
							variant="default"
							size="sm"
							className="bg-blue-500 hover:bg-blue-600"
						>
							Last 30 Days
						</Button>
					</div>

					<div className="flex items-center gap-2 px-3 py-2 border rounded-md">
						<Calendar className="h-4 w-4 text-gray-500" />
						<span className="text-sm text-gray-600">
							Mar 11, 2024 - Apr 09,2024
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
