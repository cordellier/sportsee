import React from 'react';
import '../styles/NutritionCard.css';

// Import the icons as images
import caloriesIcon from '../assets/calories-icon.png';
import proteinesIcon from '../assets/proteines-icon.png'; 
import glucidesIcon from '../assets/glucides-icon.png'; 
import lipidesIcon from '../assets/lipides-icon.png'; 

const iconMap = {
  calories: caloriesIcon,
  proteines: proteinesIcon,
  glucides: glucidesIcon,
  lipides: lipidesIcon
};

function NutritionCard({ type, value, unit }) {
  return (
    <div className={`nutrition-card ${type}`}>
      <img src={iconMap[type]} alt={`${type} icon`} className="nutrition-icon" />
      <div className="nutrition-info">
        <p className="nutrition-value">{value}{unit}</p>
        <p className="nutrition-type">{type}</p>
      </div>
    </div>
  );
}

export default NutritionCard;
