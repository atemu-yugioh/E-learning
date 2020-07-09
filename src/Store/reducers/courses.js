import data from "../../Services/data.json";
import * as type from "../../Constants/actionType";

const initialState = data;

export const courses = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COURSES: {
      const newCourse = [...state, ...action.payload];
      return newCourse;
    }
    default:
      return state;
  }
};
