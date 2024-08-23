import React, { useState, useEffect } from 'react';
import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../services/api';
import ActivityChart from './ActivityChart';
import AverageSessionsChart from './AverageSessionsChart';
import PerformanceChart from './PerformanceChart';
import ScoreChart from './ScoreChart';
import NutritionCard from './NutritionCard';
import '../styles/Dashboard.css';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const userId = 12;
    
    const fetchData = async () => {
      try {
        const data = await fetchUserData(userId);
        const activity = await fetchUserActivity(userId);
        const averageSessions = await fetchUserAverageSessions(userId);
        const performance = await fetchUserPerformance(userId);
        
        setUserData(data);
        setUserActivity(activity);
        setUserAverageSessions(averageSessions);
        setUserPerformance(performance);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Bonjour <span className="name">{userData.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      
      <div className="dashboard-content">
        <div className="charts-container">
          {userActivity && <ActivityChart data={userActivity.sessions} />}
          <div className="small-charts-container">
            {userAverageSessions && <AverageSessionsChart data={userAverageSessions.sessions} />}
            {userPerformance && <PerformanceChart data={userPerformance.data} />}
            <ScoreChart score={userData.score || userData.todayScore} />
          </div>
        </div>
        <div className="nutrition-container">
          <NutritionCard type="calories" value={userData.keyData.calorieCount} unit="kCal" />
          <NutritionCard type="proteines" value={userData.keyData.proteinCount} unit="g" />
          <NutritionCard type="glucides" value={userData.keyData.carbohydrateCount} unit="g" />
          <NutritionCard type="lipides" value={userData.keyData.lipidCount} unit="g" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;