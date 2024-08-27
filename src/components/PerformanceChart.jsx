import { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import '../styles/PerformanceChart.css';
import { fetchUserPerformance } from '../services/api'; // Importer la fonction API

function PerformanceChart({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserPerformance(userId);
        const formattedData = response.map((item) => ({
          subject: item.kind,
          A: item.value,
          fullMark: 150,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchData();
  }, [userId]);

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

// Validation des PropTypes
PerformanceChart.propTypes = {
  userId: PropTypes.number.isRequired, // Ajoutez une validation PropTypes pour l'ID utilisateur
};

export default PerformanceChart;
