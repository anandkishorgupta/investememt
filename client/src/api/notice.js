import axiosInstance from "./axiosInstance";

// Fetch all notices
export const getNotices = async () => {
  try {
    const response = await axiosInstance.get("/media"); 
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
