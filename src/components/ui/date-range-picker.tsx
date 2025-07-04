import { CalendarIcon } from "lucide-react";
import * as React from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerWithRangeProps {
	className?: string;
	date?: DateRange;
	onDateChange?: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({
	className,
	date,
	onDateChange,
}: DatePickerWithRangeProps) {
	const [selectedDate, setSelectedDate] = React.useState<DateRange | undefined>(
		date || {
			from: new Date(2024, 2, 11),
			to: new Date(2024, 3, 9),
		},
	);

	const handleDateChange = (newDate: DateRange | undefined) => {
		setSelectedDate(newDate);
		onDateChange?.(newDate);
	};

	return (
		<div className={cn("grid gap-2", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"justify-start text-left font-normal",
							!selectedDate && "text-muted-foreground",
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{selectedDate?.from ? (
							selectedDate.to ? (
								<>
									{selectedDate.from.toLocaleDateString()} -{" "}
									{selectedDate.to.toLocaleDateString()}
								</>
							) : (
								selectedDate.from.toLocaleDateString()
							)
						) : (
							<span>Pick a date range</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-auto p-0"
					align="start"
					side="bottom"
					sideOffset={4}
				>
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={selectedDate?.from}
						selected={selectedDate}
						onSelect={handleDateChange}
						numberOfMonths={2}
						fixedWeeks
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
