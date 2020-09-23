import * as types from "../constants/auth.constants";

const authState = {
  user: {},
  loading: false,
  users: [],
  //to get current accessTOken
  accessToken: localStorage.getItem("accessToken"),
};
const authReducer = (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.GET_ALL_USER_REQUEST:
      return { ...state, loading: true };
    case types.GET_CURRENT_USER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: { ...payload.user },
        accessToken: payload.accessToken,
      };
    case types.LOGOUT:
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
    case types.GET_ALL_USER_FAILURE:
      return { ...state, loading: false };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.GET_ALL_USER_SUCCESS:
      return { ...state, users: payload.users, loading: false };
    default:
      return state;
  }
};
export default authReducer;
