import actionTypes from "../actions/types";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const initialState = { isLoading: false, error: null, publicInfo: null }

const userReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GETINFO_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.GETINFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        publicInfo: payload,
        error: null,
      };
    case actionTypes.GETINFO_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducers;
