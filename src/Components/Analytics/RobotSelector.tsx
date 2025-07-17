"use client";

import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface RobotSelectorProps {
	onRobotChange?: (robot: string) => void;
	className?: string;
	placeholder?: string;
}

export default function RobotSelector({
	onRobotChange,
	className = "",
	placeholder = "All Robots",
}: RobotSelectorProps) {
	const [selectedRobot, setSelectedRobot] = useState("all");

	const handleRobotChange = (robot: string) => {
		setSelectedRobot(robot);
		onRobotChange?.(robot);
	};

	return (
		<Select value={selectedRobot} onValueChange={handleRobotChange}>
			<SelectTrigger className={`w-32 ${className}`}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All Robots</SelectItem>
				<SelectItem value="ARTOO2025">ARTOO2025</SelectItem>
				<SelectItem value="ARTOO2026">ARTOO2026</SelectItem>
				<SelectItem value="ARTOO2027">ARTOO2027</SelectItem>
			</SelectContent>
		</Select>
	);
}
