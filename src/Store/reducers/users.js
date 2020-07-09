import * as type from "../../Constants/actionType";

let initialState = [];

export const users = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_USERS:
      return action.payload;
    default:
      return state;
  }
};
