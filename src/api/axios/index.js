import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://restaurant.my-project.site/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("token");

    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
