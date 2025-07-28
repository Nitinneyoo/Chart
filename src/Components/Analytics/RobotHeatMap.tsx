import { Bot } from "lucide-react";
// import { MapPlaceholder } from "../Analytics/AnaliticsComponent/heatMap_control-panel/map-placeholder";
import { StatusCard } from "../Analytics/AnaliticsComponent/heatMap_control-panel/status-card";
import { ControlPanel } from "./AnaliticsComponent/heatMap_control-panel/control-panel";
export default function RobotHeatMap() {
	return (
		<div className="min-h-screen w-full">
			<div className="mspace-y-6">
				{/* Status Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<StatusCard
						title="Active"
						count={65}
						description="Robots that are currently in mission"
						icon={Bot}
						iconColor="bg-blue-100 text-blue-600"
					/>
					<StatusCard
						title="Idle"
						count={5}
						description="Robots that are not in any mission"
						icon={Bot}
						iconColor="bg-gray-100 text-gray-600"
					/>
					<StatusCard
						title="Charging"
						count={10}
						description="Robots that are in charging"
						icon={Bot}
						iconColor="bg-green-100 text-green-600"
					/>
					<StatusCard
						title="Error"
						count={5}
						description="Robots that are in error state"
						icon={Bot}
						iconColor="bg-red-100 text-red-600"
					/>
				</div>

				{/* Control Panel */}
				<div className="space-y-6 mt-6">
					<ControlPanel />
				</div>

				<div className="space-y-6 mt-6">
					{/* <MapPlaceholder /> */}
				</div>
				{/* Map Placeholder - Replace this with your map component */}
			</div>
		</div>
	);
}
