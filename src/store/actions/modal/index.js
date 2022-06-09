import * as ACTION_TYPES from "../../../constants/action-types";

export const setItemId = async (data) => {
  return {
    type: ACTION_TYPES.SET_ITEM_ID_SUCCEEDED,
    payload: {
      data,
    },
  };
};

export const removeItemId = async () => {
  return {
    type: ACTION_TYPES.REMOVE_ITEM_ID_SUCCEEDED,
  };
};

export const showModal = async (title, content, handleFunction) => {
  return {
    type: ACTION_TYPES.SHOW_MODAL_SUCCEEDED,
    payload: {
      title,
      content,
      handleFunction,
    },
  };
};
