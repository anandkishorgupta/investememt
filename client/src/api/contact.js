import axiosInstance from "./axiosInstance";

export const sendContactMessage = async (data) => {
  try {
    const response = await axiosInstance.post("/contact", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
