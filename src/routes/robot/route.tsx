import { createFileRoute } from "@tanstack/react-router";
import RobotScreen from "@/Components/Robot/robot";

export const Route = createFileRoute("/robot")({
	component: RobotScreen,
});
