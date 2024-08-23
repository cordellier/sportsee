import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user activity:", error);
    throw error;
  }
};

export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/average-sessions`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user average sessions:", error);
    throw error;
  }
};

export const fetchUserPerformance = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/performance`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user performance:", error);
    throw error;
  }
};
