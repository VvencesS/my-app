import * as ACTION_TYPES from "../../constants/action-types";

const initialState = {
  fullname: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_INFO_RETRIEVE_SUCCEEDED:
      return {
        ...state,
        username: action?.payload?.data?.username ?? "",
        fullname: action?.payload?.data?.fullname ?? "",
        email: action?.payload?.data?.email ?? "",
        chucVu: action?.payload?.data?.chucVu ?? "",
        roles: action?.payload?.data?.roles ?? [],
      };
    default:
      return state;
  }
};
export default reducer;
