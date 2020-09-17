import * as types from "../constants/course.constants";

const courseState = {
  courses: [],
  loading: false,
};
const courseReducer = (state = courseState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.COURSE_REQUEST:
      return { ...state, loading: true };

    case types.COURSE_REQUEST_SUCCESS:
      return { ...state, course: payload, loading: false };
    case types.COURSE_REQUEST_FAILURE:
      console.log("Course req faile", payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default courseReducer;
