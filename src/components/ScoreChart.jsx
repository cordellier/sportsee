import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../styles/ScoreChart.css';
import { fetchUserData } from '../services/api'; 

function ScoreChart({ userId }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData(userId);
        setScore(data.todayScore * 100); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]);

  const chartData = [
    {
      name: 'score',
      value: score,
      fill: '#FF0000',
    },
  ];

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
          data={chartData}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-label">
        <span className="score-value">{Math.round(score)}%</span>
        <span className="score-text">de votre objectif</span>
      </div>
    </div>
  );
}

// Validation des PropTypes
ScoreChart.propTypes = {
  userId: PropTypes.number.isRequired, 
};

export default ScoreChart;
