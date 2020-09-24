import * as types from "../constants/course.constants";
import api from "../api";
import { alertActions } from "./alert.actions";
import { authActions } from "./auth.actions";
import { redirectActions } from "./redirect.actions";

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

const updateCourse = (courseId, title, description, price) => async (
  dispatch
) => {
  dispatch({ type: types.UPDATE_COURSE_REQUEST, payload: null });
  try {
    // let formData = new FormData();
    // formData.set("title", title);
    // formData.set("content", content);
    const res = await api.put(`/course/${courseId}`, {
      title,
      description,
      price,
    });
    dispatch({
      type: types.UPDATE_COURSE_SUCCESS,
      payload: res.data.data,
    });
    dispatch(alertActions.setAlert("The course has been updated!", "success"));
  } catch (error) {
    dispatch({ type: types.UPDATE_COURSE_FAILURE, payload: error });
  }
};

const enrollCourse = (courseId, accessToken) => async (dispatch) => {
  dispatch({ type: types.ENROLL_COURSE_REQUEST, payload: null });
  try {
    const res = await api.post(`/course/${courseId}/enroll`);
    // console.log("receive from sever", res);
    dispatch({
      type: types.ENROLL_COURSE_SUCCESS,
      payload: res.data.data,
    });
    dispatch(authActions.getCurrentUser(accessToken));
    dispatch(alertActions.setAlert("Welcome to the course", "success"));
    dispatch(redirectActions.setRedirectTo("/"));
  } catch (error) {
    dispatch({ type: types.ENROLL_COURSE_FAILURE, payload: error });
  }
};

const getEnrollment = (courseId, userId) => async (dispatch) => {
  dispatch({ type: types.GET_ENROLLMENT_REQUEST, payload: null });
  try {
    const res = await api.get(`/course/${courseId}/enroll`);
    // console.log("receive from sever", res);
    dispatch({
      type: types.GET_ENROLLMENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_ENROLLMENT_FAILURE, payload: error });
  }
};

const getEnrollCourses = () => async (dispatch) => {
  dispatch({ type: types.GET_ENROLL_COURSES_REQUEST, payload: null });
  try {
    const res = await api.get(`/user/courses`);
    // console.log("receive from sever", res);
    dispatch({
      type: types.GET_ENROLL_COURSES_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_ENROLL_COURSES_FAILURE, payload: error });
  }
};

const assignTeacher = (courseId, teacherId) => async (dispatch) => {
  dispatch({ type: types.ASSIGN_TEACHER_REQUEST, payload: null });
  try {
    const res = await api.post(`/course/${courseId}/teacher/${teacherId}`);
    dispatch({
      type: types.ASSIGN_TEACHER_SUCCESS,
      payload: {
        teachers: res.data.data,
        id: courseId,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.ASSIGN_TEACHER_FAILURE, payload: error });
  }
};
const unAssignTeacher = (teachingId) => async (dispatch) => {
  dispatch({ type: types.UNASSIGN_TEACHER_REQUEST, payload: null });
  try {
    const res = await api.delete(`/course/teaching/unassign/${teachingId}`);
    dispatch({
      type: types.UNASSIGN_TEACHER_SUCCESS,
      payload: teachingId,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.UNASSIGN_TEACHER_FAILURE, payload: error });
  }
};
export const courseActions = {
  getAllCourse,
  getSingleCourse,
  enrollCourse,
  getEnrollment,
  getEnrollCourses,
  updateCourse,
  assignTeacher,
  unAssignTeacher,
};
