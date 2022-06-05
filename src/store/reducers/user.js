
import * as ACTION_TYPES from '../../constants/action-types';

const initialState = {
  fullname: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_INFO_RETRIEVE_SUCCEEDED:
      return {
        ...state,
        fullname: action?.payload?.data?.fullname ?? '',
      }
    default:
      return state;
  }
};

export default reducer;
