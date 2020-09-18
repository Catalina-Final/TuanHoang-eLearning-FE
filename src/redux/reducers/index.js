import { combineReducers } from "redux";
import courseReducer from "./course.reducer";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";
import redirectReducer from "./redirect.reducer";

// import userReducer from "./user.reducer";

export default combineReducers({
  course: courseReducer,
  auth: authReducer,
  alert: alertReducer,
  redirect: redirectReducer,
  // user: userReducer,
});
