// Mock data for Timeline Chart
export interface TimelineBar {
  status: 'error' | 'active' | 'idle' | 'charging' | 'connected';
  startTime: string;
  duration: number; // in percentage
  color: string;
  position: {
    top: string;
    left: string;
  };
}

export const mockTimelineData: Record<string, TimelineBar[]> = {
  'all-robots': [
  { status: 'error', startTime: '13:00', duration: 4, color: 'bg-red-300', position: { top: '16px', left: '33%' } },
  { status: 'active', startTime: '10:30', duration: 18, color: 'bg-green-300', position: { top: '56px', left: '8%' } },
  { status: 'active', startTime: '12:00', duration: 10, color: 'bg-green-300', position: { top: '56px', left: '28%' } },
  { status: 'active', startTime: '15:30', duration: 10, color: 'bg-green-300', position: { top: '56px', left: '48%' } },
  { status: 'active', startTime: '17:00', duration: 10, color: 'bg-green-300', position: { top: '56px', left: '60%' } },
  { status: 'active', startTime: '19:00', duration: 6, color: 'bg-green-300', position: { top: '56px', left: '72%' } },
  { status: 'active', startTime: '20:30', duration: 15, color: 'bg-green-300', position: { top: '56px', left: '80%' } },
  { status: 'idle', startTime: '11:45', duration: 4, color: 'bg-blue-200', position: { top: '96px', left: '26%' } },
  { status: 'idle', startTime: '16:45', duration: 3, color: 'bg-blue-200', position: { top: '96px', left: '58%' } },
  { status: 'idle', startTime: '18:45', duration: 3, color: 'bg-blue-200', position: { top: '96px', left: '70%' } },
  { status: 'idle', startTime: '20:15', duration: 2, color: 'bg-blue-200', position: { top: '96px', left: '78%' } },
  { status: 'charging', startTime: '14:00', duration: 12, color: 'bg-orange-300', position: { top: '136px', left: '38%' } },
  { status: 'connected', startTime: '10:00', duration: 95, color: 'bg-blue-400', position: { top: '176px', left: '2%' } },
],
'robot-1': [
  { status: 'error', startTime: '14:30', duration: 6, color: 'bg-red-300', position: { top: '16px', left: '45%' } },
  { status: 'active', startTime: '10:00', duration: 15, color: 'bg-green-300', position: { top: '56px', left: '5%' } },
  { status: 'active', startTime: '12:30', duration: 8, color: 'bg-green-300', position: { top: '56px', left: '30%' } },
  { status: 'active', startTime: '16:00', duration: 12, color: 'bg-green-300', position: { top: '56px', left: '55%' } },
  { status: 'active', startTime: '20:00', duration: 10, color: 'bg-green-300', position: { top: '56px', left: '75%' } },
  { status: 'idle', startTime: '11:30', duration: 5, color: 'bg-blue-200', position: { top: '96px', left: '20%' } },
  { status: 'idle', startTime: '15:00', duration: 4, color: 'bg-blue-200', position: { top: '96px', left: '50%' } },
  { status: 'idle', startTime: '19:00', duration: 3, color: 'bg-blue-200', position: { top: '96px', left: '70%' } },
  { status: 'charging', startTime: '13:00', duration: 10, color: 'bg-orange-300', position: { top: '136px', left: '35%' } },
  { status: 'connected', startTime: '10:00', duration: 90, color: 'bg-blue-400', position: { top: '176px', left: '5%' } },
],
'robot-2': [
  { status: 'error', startTime: '11:00', duration: 3, color: 'bg-red-300', position: { top: '16px', left: '15%' } },
  { status: 'error', startTime: '18:30', duration: 5, color: 'bg-red-300', position: { top: '16px', left: '65%' } },
  { status: 'active', startTime: '10:00', duration: 8, color: 'bg-green-300', position: { top: '56px', left: '5%' } },
  { status: 'active', startTime: '13:00', duration: 15, color: 'bg-green-300', position: { top: '56px', left: '35%' } },
  { status: 'active', startTime: '17:00', duration: 7, color: 'bg-green-300', position: { top: '56px', left: '60%' } },
  { status: 'active', startTime: '21:00', duration: 12, color: 'bg-green-300', position: { top: '56px', left: '80%' } },
  { status: 'idle', startTime: '12:00', duration: 4, color: 'bg-blue-200', position: { top: '96px', left: '25%' } },
  { status: 'idle', startTime: '16:00', duration: 3, color: 'bg-blue-200', position: { top: '96px', left: '55%' } },
  { status: 'idle', startTime: '20:00', duration: 2, color: 'bg-blue-200', position: { top: '96px', left: '75%' } },
  { status: 'charging', startTime: '15:00', duration: 8, color: 'bg-orange-300', position: { top: '136px', left: '50%' } },
  { status: 'connected', startTime: '10:00', duration: 92, color: 'bg-blue-400', position: { top: '176px', left: '4%' } },
],
};

// Mock data for Peak Activity
export const mockPeakActivityData = {
  'all-robots': [
    { time: "10:00", value: 45 },
    { time: "11:00", value: 35 },
    { time: "12:00", value: 65 },
    { time: "13:00", value: 55 },
    { time: "14:00", value: 85 },
    { time: "15:00", value: 75 },
    { time: "16:00", value: 25 },
    { time: "17:00", value: 55 },
    { time: "18:00", value: 45 },
    { time: "19:00", value: 15 },
    { time: "20:00", value: 75 },
    { time: "21:00", value: 45 },
    { time: "22:00", value: 65 },
    { time: "23:00", value: 45 },
    { time: "24:00", value: 65 },
    { time: "00:00", value: 55 },
  ],
  'robot-1': [
    { time: "10:00", value: 35 },
    { time: "11:00", value: 25 },
    { time: "12:00", value: 55 },
    { time: "13:00", value: 45 },
    { time: "14:00", value: 75 },
    { time: "15:00", value: 65 },
    { time: "16:00", value: 15 },
    { time: "17:00", value: 45 },
    { time: "18:00", value: 35 },
    { time: "19:00", value: 10 },
    { time: "20:00", value: 65 },
    { time: "21:00", value: 35 },
    { time: "22:00", value: 55 },
    { time: "23:00", value: 35 },
    { time: "24:00", value: 55 },
    { time: "00:00", value: 45 },
  ],
  'robot-2': [
    { time: "10:00", value: 25 },
    { time: "11:00", value: 45 },
    { time: "12:00", value: 35 },
    { time: "13:00", value: 65 },
    { time: "14:00", value: 55 },
    { time: "15:00", value: 85 },
    { time: "16:00", value: 35 },
    { time: "17:00", value: 25 },
    { time: "18:00", value: 55 },
    { time: "19:00", value: 25 },
    { time: "20:00", value: 45 },
    { time: "21:00", value: 55 },
    { time: "22:00", value: 35 },
    { time: "23:00", value: 65 },
    { time: "24:00", value: 45 },
    { time: "00:00", value: 35 },
  ],
};

export const mockPeakActivityInfo = {
  'all-robots': {
    peakHours: "9:00 AM - 10:00 AM",
    maxMissions: "210"
  },
  'robot-1': {
    peakHours: "8:30 AM - 9:30 AM",
    maxMissions: "120"
  },
  'robot-2': {
    peakHours: "10:15 AM - 11:15 AM",
    maxMissions: "90"
  }
};

// Mock data for Robot Utilization
export const mockUtilizationData = {
  robotOptions: [
    { value: "AR2002026", label: "AR2002026" },
    { value: "AR2002027", label: "AR2002027" },
    { value: "AR2002028", label: "AR2002028" }
  ],
  "AR2002026": {
    activeTime: "7 Hours",
    idleTime: "2 Hours",
    utilizationRate: "70%"
  },
  "AR2002027": {
    activeTime: "5 Hours",
    idleTime: "3 Hours",
    utilizationRate: "62%"
  },
  "AR2002028": {
    activeTime: "8 Hours",
    idleTime: "1 Hour",
    utilizationRate: "85%"
  }
};

// Mock data for Request Fulfillment Overview
export const mockFulfillmentData = {
  totalAssigned: 45,
  completed: 40,
  failed: 5,
  successRate: "88%"
};