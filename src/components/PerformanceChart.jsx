import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/PerformanceChart.css';

const data = [
  { subject: 'Intensité', A: 120, fullMark: 150 },
  { subject: 'Vitesse', A: 98, fullMark: 150 },
  { subject: 'Force', A: 86, fullMark: 150 },
  { subject: 'Endurance', A: 99, fullMark: 150 },
  { subject: 'Energie', A: 85, fullMark: 150 },
  { subject: 'Cardio', A: 110, fullMark: 150 },
];

function PerformanceChart() {
  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 12 }} />
          <Radar name="Performance" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;