import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";

interface DateRangeFilterProps {
	onDateRangeChange?: (dateRange: DateRange | undefined) => void;
	className?: string;
}

export function DateRangeFilter({
	onDateRangeChange,
	className,
}: DateRangeFilterProps) {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2024, 2, 11),
		to: new Date(2024, 3, 9),
	});

	const handleDateChange = (newDateRange: DateRange | undefined) => {
		if (newDateRange?.from && newDateRange?.to) {
			// Limit to 30 days maximum
			const daysDiff = Math.ceil(
				(newDateRange.to.getTime() - newDateRange.from.getTime()) /
					(1000 * 60 * 60 * 24),
			);

			if (daysDiff > 30) {
				// If more than 30 days, adjust the end date
				const limitedEndDate = new Date(newDateRange.from);
				limitedEndDate.setDate(limitedEndDate.getDate() + 30);

				const limitedRange = {
					from: newDateRange.from,
					to: limitedEndDate,
				};

				setDateRange(limitedRange);
				onDateRangeChange?.(limitedRange);
			} else {
				setDateRange(newDateRange);
				onDateRangeChange?.(newDateRange);
			}
		} else {
			setDateRange(newDateRange);
			onDateRangeChange?.(newDateRange);
		}
	};

	return (
		<div className={className}>
			<DatePickerWithRange date={dateRange} onDateChange={handleDateChange} />
		</div>
	);
}
