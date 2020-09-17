import * as types from "../constants/course.constants";
import api from "../api";

const getAllCourse = () => async (dispatch) => {
  dispatch({ type: types.COURSE_REQUEST, payload: null });
  try {
    const res = api.get("/course");
    console.log("receive from sever", res);
    dispatch({ type: types.COURSE_REQUEST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.COURSE_REQUEST_FAILURE, payload: res.data });
  }
};
export const courseActions = {
  getAllCourse,
};
