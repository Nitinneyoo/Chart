import { Activity, AlertTriangle, Battery, Pause } from "lucide-react";
import { ControlPanel } from "../AnaliticsComponent/control-panel/control-panel";
import { MapPlaceholder } from "../AnaliticsComponent/control-panel/map-placeholder";
import { StatusCard } from "../AnaliticsComponent/control-panel/status-card";
export default function RobotDashboard() {
	return (
		<div className="min-h-screen bg-gray-100 w-full">
			<div className="mspace-y-6">
				{/* Status Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<StatusCard
						title="Active"
						count={65}
						description="Robots that are currently in mission"
						icon={Activity}
						bgColor="bg-blue-50"
						iconColor="bg-blue-100 text-blue-600"
					/>
					<StatusCard
						title="Idle"
						count={5}
						description="Robots that are not in any mission"
						icon={Pause}
						bgColor="bg-gray-50"
						iconColor="bg-gray-100 text-gray-600"
					/>
					<StatusCard
						title="Charging"
						count={10}
						description="Robots that are in charging"
						icon={Battery}
						bgColor="bg-green-50"
						iconColor="bg-green-100 text-green-600"
					/>
					<StatusCard
						title="Error"
						count={5}
						description="Robots that are in error state"  
						icon={AlertTriangle}
						bgColor="bg-red-50"
						iconColor="bg-red-100 text-red-600"
					/>
				</div>

				{/* Control Panel */}
				<div className="space-y-6 mt-6">
					<ControlPanel />
				</div>

				{/* Map Placeholder - Replace this with your map component */}
				<MapPlaceholder />
			</div>
		</div>
	);
}
