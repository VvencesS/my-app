import axios from "axios";

const apiClient = () => {
  const { REACT_APP_API_URL } = process.env;

  let configAxios = {
    baseURL: REACT_APP_API_URL,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = localStorage.getItem("access_token");
  if (token) {
    if (token) {
      configAxios.headers["Authorization"] = "Bearer " + token; // for Spring Boot back-end
      // config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
  }

  const axiosInstance = axios.create(configAxios);

  return axiosInstance;
};

export default apiClient;
