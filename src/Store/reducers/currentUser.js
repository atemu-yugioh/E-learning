import * as type from "../../Constants/actionType";

const initialState = {};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case type.SET__CURRENT__USER: {
      state = action.payload;
      return action.payload;
    }
    default:
      return state;
  }
};
