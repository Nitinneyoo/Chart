import { Card, CardContent } from "@/components/ui/card"
import { Bot } from "lucide-react"

interface UtilizationCardProps {
  title: string;
  value: string;
}

export function UtilizationCard({ title, value }: UtilizationCardProps) {
  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-4 flex items-center gap-3">
        <Bot className="w-8 h-8 text-gray-600" />
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}