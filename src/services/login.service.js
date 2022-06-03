import apiClient from "../helper/apiClient";

const loginAxios = (data) => apiClient().post("login", data);

const logout = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("access_token");
};

const LoginService = {
  loginAxios,
  logout,
};

export default LoginService;
