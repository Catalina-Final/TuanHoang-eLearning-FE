import * as types from "../constants/course.constants";
import api from "../api";

//getAllCourse -> /ccpurse
const getAllCourse = () => async (dispatch) => {
  dispatch({ type: types.COURSE_REQUEST, payload: null });
  try {
    const res = await api.get("/course");
    // console.log("receive from sever", res);
    dispatch({
      type: types.COURSE_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.COURSE_REQUEST_FAILURE, payload: error });
  }
};
const getSingleCourse = (courseId) => async (dispatch) => {
  dispatch({ type: types.SINGLE_COURSE_REQUEST, payload: null });
  try {
    const res = await api.get(`/course/${courseId}`);
    // console.log("receive from sever", res);
    dispatch({
      type: types.SINGLE_COURSE_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.SINGLE_COURSE_REQUEST_FAILURE, payload: error });
  }
};

export const courseActions = {
  getAllCourse,
  getSingleCourse,
};
