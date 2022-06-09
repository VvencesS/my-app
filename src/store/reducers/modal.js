import * as actionTypes from "../../constants/action-types";

const initialState = {
  itemId: "",
  title: "Xác nhận",
  content: "",
  handleFunction: { acceptFunc: () => {}, cancelFunc: () => {} },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEM_ID_SUCCEEDED:
      return {
        ...state,
        itemId: action.payload.data ?? "",
      };
    case actionTypes.REMOVE_ITEM_ID_SUCCEEDED:
      return {
        ...state,
        itemId: "",
      };
    case actionTypes.SHOW_MODAL_SUCCEEDED:
      return {
        ...state,
        title: action.payload.title ?? "Xác nhận",
        content: action.payload.content ?? "",
        handleFunction: action.payload.handleFunction,
      };
    default:
      return state;
  }
};

export default reducer;
