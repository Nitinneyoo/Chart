import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

interface FilterSectionProps {
  selectLabel: string;
  selectOptions: { value: string; label: string }[];
  defaultValue: string;
  onRobotChange?: (value: string) => void;
  selectedRobot?: string;
}

export function FilterSection({ selectLabel, selectOptions, defaultValue, onRobotChange, selectedRobot = defaultValue }: FilterSectionProps) {
  return (
    <div className="flex flex-col gap-3">
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
        
        <DatePickerWithRange />
      </div>
    </div>
  )
}