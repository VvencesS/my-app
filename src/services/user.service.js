import apiClient from "../helper/apiClient";

const getPublicInfo = () => apiClient().get("user/publicInfo");

const UserService = {
  getPublicInfo,
};

export default UserService;
