import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Lottie from "react-lottie"

interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  animationData: any;
}

export function MetricCard({ title, value, description, animationData }: MetricCardProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Card className="bg-white p-2 gap-4 rounded-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className="ml-10">

        <Lottie options={defaultOptions} height={32} width={32} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{description}</p> 
      </CardContent>
    </Card>
  );
}