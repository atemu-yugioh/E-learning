import * as type from "../../Constants/actionType";

const initialState = {};

export const courseEdit = (state = initialState, action) => {
  switch (action.type) {
    case type.EDIT_COURSE:
      return action.payload;

    default:
      return state;
  }
};
