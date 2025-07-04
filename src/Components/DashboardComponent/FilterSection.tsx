import type { DateRange } from "react-day-picker";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { DateRangeFilter } from "./DateRangeFilter";

interface FilterSectionProps {
	selectLabel: string;
	selectOptions: { value: string; label: string }[];
	defaultValue: string;
	onRobotChange?: (value: string) => void;
	selectedRobot?: string;
	onDateRangeChange?: (dateRange: DateRange | undefined) => void;
}

export function FilterSection({
	selectLabel,
	selectOptions,
	defaultValue,
	onRobotChange,
	selectedRobot = defaultValue,
	onDateRangeChange,
}: FilterSectionProps) {
	return (
		<div className="flex flex-col gap-2">
			<p className="text-sm font-medium text-gray-700">{selectLabel}</p>
			<div className="flex items-center gap-3">
				<Select
					defaultValue={defaultValue}
					value={selectedRobot}
					onValueChange={onRobotChange}
				>
					<SelectTrigger className="w-[230px]">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{selectOptions.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<DateRangeFilter onDateRangeChange={onDateRangeChange} />
			</div>
		</div>
	);
}
