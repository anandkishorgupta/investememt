import axiosInstance from "./axiosInstance";
export const GetHeroSectionData = async () => {
  try {
    const response = await axiosInstance.get("/portfolio");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const GetHeroSectionDataById = async (id) => {
  try {
    const response = await axiosInstance.get(`/portfolio/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// get directors
export const getDirectors = async () => {
  const res = await axiosInstance.get("/directors");
  return res.data;
};

// get teams
export const getTeams = async () => {
  const res = await axiosInstance.get("/team");
  return res.data;
}