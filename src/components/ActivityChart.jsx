import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';
import '../styles/ActivityChart.css';
import { fetchUserActivity } from '../services/api';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length >= 2) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0]?.value}kg`}</p>
        <p>{`${payload[1]?.value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

function ActivityChart({ userId }) {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const getUserActivity = async () => {
      try {
        const data = await fetchUserActivity(userId);
        const formattedData = data.sessions.map((session, index) => ({
          day: index + 1, // Vous pouvez formater le jour ici
          weight: session.kilogram,
          calories: session.calories,
        }));
        setActivityData(formattedData);
      } catch (error) {
        console.error("Error fetching user activity:", error);
      }
    };

    getUserActivity();
  }, [userId]);

  return (
    <div className="activity-chart">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={activityData} barGap={8} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} />
          <YAxis yAxisId="left" orientation="right" tickLine={false} axisLine={false} tick={{ fontSize: 14 }} dx={15} />
          <YAxis yAxisId="right" orientation="left" tickLine={false} axisLine={false} hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '15px' }} />
          <Bar yAxisId="left" dataKey="weight" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} name="Poids (kg)" />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ActivityChart;
