import * as types from "../constants/course.constants";

const courseState = {
  courses: [],
  loading: false,
  enrollCourses: [],
  teachers: [],
};

const courseReducer = (state = courseState, action) => {
  const { type, payload } = action;
  // console.log("courseReducer", payload);
  switch (type) {
    case types.COURSE_REQUEST:
    case types.SINGLE_COURSE_REQUEST:
    case types.UPDATE_COURSE_REQUEST:
    case types.ASSIGN_TEACHER_REQUEST:
    case types.UNASSIGN_TEACHER_REQUEST:
      return { ...state, loading: true };

    case types.COURSE_REQUEST_SUCCESS:
      return { ...state, courses: payload.courses, loading: false };

    case types.SINGLE_COURSE_REQUEST_SUCCESS:
      // console.log("Course req success", payload);
      return {
        ...state,
        selectedCourse: payload.course,
        teachers: payload.teachers,
        loading: false,
      };
    case types.UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        selectedCourse: { ...state.selectedCourse, ...payload },
        courses: state.courses.map((course) => {
          if (course._id !== payload._id) return course;
          return { ...course, ...payload };
        }),
        loading: false,
        redirectTo: "__GO_BACK__",
      };
    case types.ASSIGN_TEACHER_SUCCESS:
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course._id !== payload.id) return course;
          return { ...course, teachers: payload.teachers };
        }),
        selectedCourse: {
          ...state.selectedCourse,
          teacherss: payload.teachers,
        },
      };
    case types.UNASSIGN_TEACHER_SUCCESS:
      return {
        ...state,
        courses: state.courses.map((course) => {
          return {
            ...course,
            teachers: course.teachers.filter(
              (teaching) => teaching._id !== payload
            ),
          };
        }),
        selectedCourse: {
          ...state.selectedCourse,
          teacherss: state.selectedCourse.teacherss.filter(
            (teaching) => teaching._id !== payload
          ),
        },
      };
    case types.UNASSIGN_TEACHER_FAILURE:
    case types.ASSIGN_TEACHER_FAILURE:
    case types.COURSE_REQUEST_FAILURE:
    case types.SINGLE_COURSE_REQUEST_FAILURE:
    case types.UPDATE_COURSE_FAILURE:
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
        selectedCourse: {
          ...state.selectedCourse,
          enrollment: payload && payload.status ? payload.status : false,
        },
        loading: false,
      };
    case types.GET_ENROLLMENT_FAILURE:
      return { ...state, loading: false };

    case types.GET_ENROLL_COURSES_REQUEST:
      return { ...state, loading: true };
    case types.GET_ENROLL_COURSES_SUCCESS:
      return {
        ...state,
        enrollCourses: payload,
        loading: false,
      };
    case types.GET_ENROLL_COURSES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default courseReducer;
