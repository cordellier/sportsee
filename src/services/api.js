import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchUserActivity = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/activity?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user activity:", error);
    throw error;
  }
};

export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/average-sessions?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user average sessions:", error);
    throw error;
  }
};

export const fetchUserPerformance = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/performance?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user performance:", error);
    throw error;
  }
};
