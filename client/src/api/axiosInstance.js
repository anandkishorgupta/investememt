import axios from "axios";

// const API_URL = "http://localhost:5000/api";
const API_URL = import.meta.env.VITE_API_URL ;
console.log("api url",API_URL)

const axiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
