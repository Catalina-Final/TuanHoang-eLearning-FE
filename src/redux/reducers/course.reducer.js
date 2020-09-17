import * as types from "../constants/course.constants";

const courseState = {
  courses: [],
  loading: false,
};

const courseReducer = (state = courseState, action) => {
  const { type, payload } = action;
  // console.log("courseReducer", payload);
  switch (type) {
    case types.COURSE_REQUEST:
    case types.SINGLE_COURSE_REQUEST:
      return { ...state, loading: true };

    case types.COURSE_REQUEST_SUCCESS:
      return { ...state, courses: payload.courses, loading: false };

    case types.SINGLE_COURSE_REQUEST_SUCCESS:
      // console.log("Course req success", payload);
      return { ...state, selectedCourse: payload, loading: false };

    case types.COURSE_REQUEST_FAILURE:
    case types.SINGLE_COURSE_REQUEST_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default courseReducer;
