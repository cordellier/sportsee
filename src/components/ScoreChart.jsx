import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../styles/ScoreChart.css';

const data = [
  {
    name: 'score',
    value: 12,
    fill: '#FF0000',
  },
];

function ScoreChart() {
  return (
    <div className="score-chart">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="60%" 
          outerRadius="80%" 
          barSize={10} 
          data={data} 
          startAngle={90} 
          endAngle={-270}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-label">
        <span className="score-value">12%</span>
        <span className="score-text">de votre objectif</span>
      </div>
    </div>
  );
}

export default ScoreChart;