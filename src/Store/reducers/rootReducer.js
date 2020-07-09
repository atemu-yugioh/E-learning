import { combineReducers } from "redux";
import { courses } from "./courses";
import { cart } from "./cart";
import { currentUser } from "./currentUser";
import { users } from "./users";
import { display } from "./display";
import { courseEdit } from "./courseEdit";

const rootReducer = combineReducers({
  courses,
  cart,
  currentUser,
  users,
  display,
  courseEdit,
});

export default rootReducer;
