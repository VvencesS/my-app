import * as actionTypes from '../../constants/action-types';

// import { updateClientId } from '../../../helpers';
const initialState = {
  accessToken: localStorage.getItem('accessToken')
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.USER_LOGIN_SUCCEEDED:
      localStorage.setItem('accessToken', action.payload.data.access_token || '');
      return {
        ...state,
        accessToken: action.payload.data.access_token || ''
      }
    
    case actionTypes.USER_LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('specializedBank');
      return {
        ...state,
        accessToken: '',
      }
    case actionTypes.USER_INFO_RETRIEVE_FAILED:
      localStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: '',
      }
    default:
      return state;
  }
};

export default reducer;
