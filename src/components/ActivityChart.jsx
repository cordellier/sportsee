import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import '../styles/ActivityChart.css';

const data = [
  { day: '1', weight: 70.2, calories: 240 },
  { day: '2', weight: 70.5, calories: 220 },
  { day: '3', weight: 70.5, calories: 356 },
  { day: '4', weight: 68, calories: 356 },
  { day: '5', weight: 69, calories: 200 },
  { day: '6', weight: 70, calories: 260 },
  { day: '7', weight: 69, calories: 190 },
  { day: '8', weight: 69.5, calories: 350 },
  { day: '9', weight: 69.7, calories: 270 },
  { day: '10', weight: 70, calories: 290 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

function ActivityChart() {
  return (
    <div className="activity-chart">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={8} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} />
          <YAxis yAxisId="left" orientation="right" tickLine={false} axisLine={false} tick={{fontSize: 14}} dx={15} />
          <YAxis yAxisId="right" orientation="left" tickLine={false} axisLine={false} hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{paddingBottom: '15px'}} />
          <Bar yAxisId="left" dataKey="weight" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} name="Poids (kg)" />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;