import { createFileRoute } from "@tanstack/react-router";
import FleetAnalytics from "@/Components/Analytics/analytics";

export const Route = createFileRoute("/analytics")({
	component: FleetAnalytics,
});
