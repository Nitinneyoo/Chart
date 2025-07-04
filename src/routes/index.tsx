import { createFileRoute } from "@tanstack/react-router";
import DashboardScreen from "@/Components/Dashboard/DashboardScreen";

export const Route = createFileRoute("/")({
	component: DashboardScreen,
});
