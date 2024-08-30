import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/PerformanceChart.css';

function PerformanceChart({ data, kind }) {
  if (!data || !kind) return <div>Aucune donnée de performance disponible</div>;

  const formattedData = data.map((item) => ({
    subject: kind[item.kind],
    A: item.value,
  }));

  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 12 }} />
          <Radar name="Performance" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    kind: PropTypes.number,
    value: PropTypes.number
  })),
  kind: PropTypes.objectOf(PropTypes.string)
};

export default PerformanceChart;