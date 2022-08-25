import * as ACTION_TYPES from "../../constants/action-types";

const initialState = {
  success: true,
  msg: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_LIST_OF_MODELTYPEPARAM_SUCCEEDED:
      return {
        ...state,
        success: true,
        msg: "Có " + action?.payload?.data?.modelTypeTotal + " bản ghi",
      };
    case ACTION_TYPES.GET_LIST_OF_MODELTYPEPARAM_FAILED:
      return {
        ...state,
        success: false,
        msg: action?.payload?.error + " - " + action?.payload?.message,
      };

    default:
      return state;
  }
};
export default reducer;
