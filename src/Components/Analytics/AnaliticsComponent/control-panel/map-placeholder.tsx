import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MapPlaceholder() {
	return (
		<Card className="w-full h-[600px] bg-gray-50">
			<CardContent className="h-full flex items-center justify-center p-8">
				<div className="text-center">
					<MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
					<h3 className="text-lg font-medium text-gray-600 mb-2">
						Map Component Placeholder
					</h3>
					<p className="text-sm text-gray-500 max-w-md">
						This space is reserved for your map component. You can replace this
						placeholder with your custom map implementation that will show robot
						positions, charging stations, and heatmap overlays.
					</p>
					<div className="mt-4 p-4 bg-white rounded-lg border border-dashed border-gray-300">
						<code className="text-xs text-gray-600">
							{"<YourMapComponent />"}
						</code>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
