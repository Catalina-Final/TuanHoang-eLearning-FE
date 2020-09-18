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

    case types.ENROLL_COURSE_REQUEST:
      return { ...state, loading: true };
    case types.ENROLL_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCourse: { ...state.selectedCourse, enrollment: "enroll" },
      };
    case types.ENROLL_COURSE_FAILURE:
      return { ...state, loading: false };

    case types.GET_ENROLLMENT_REQUEST:
      return { ...state, loading: true };
    case types.GET_ENROLLMENT_SUCCESS:
      return {
        ...state,
        selectedCourse: { ...state.selectedCourse, enrollment: payload.status },
        loading: false,
      };
    case types.GET_ENROLLMENT_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default courseReducer;
