import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import '../styles/AverageSessionsChart.css';
import { fetchUserAverageSessions } from '../services/api';

function AverageSessionsChart({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserAverageSessions(userId);
        setData(response.sessions || []);
      } catch (error) {
        console.error('Error fetching average sessions data:', error);
      }
    };
    fetchData();
  }, [userId]);

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

// Validation des PropTypes
AverageSessionsChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default AverageSessionsChart;
