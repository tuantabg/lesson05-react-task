import * as Types from "../constants/ActionTypes";

// Action list product all
export const listProductAll = () => {
  return {
      type : Types.LIST_PRODUCT_ALL
  }
};

// Action change message
export const actChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message : message
    }
};