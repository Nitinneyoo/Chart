import RobotScreen from '@/Components/Robot/robot'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/robot')({
  component: RobotScreen
})


