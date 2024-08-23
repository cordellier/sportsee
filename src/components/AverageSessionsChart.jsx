import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/AverageSessionsChart.css';

const data = [
  { day: 'L', sessionLength: 30 },
  { day: 'M', sessionLength: 23 },
  { day: 'M', sessionLength: 45 },
  { day: 'J', sessionLength: 50 },
  { day: 'V', sessionLength: 0 },
  { day: 'S', sessionLength: 60 },
  { day: 'D', sessionLength: 50 },
];

function AverageSessionsChart() {
  return (
    <div className="average-sessions-chart">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255, 255, 255, 0.5)' }} />
          <YAxis hide={true} />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessionsChart;