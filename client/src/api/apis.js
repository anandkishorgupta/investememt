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

// export const GetInvestWithUsData = async () => {
//   try {
//     const response = await axiosInstance.get("/portfolio");
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || error.message;

//   }

// }