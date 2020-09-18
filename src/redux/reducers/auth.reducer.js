import * as types from "../constants/auth.constants";

const authState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  //to get current accessTOken
  accessToken: localStorage.getItem("accessToken"),
};
const authReducer = (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
    // case types.REGISTER_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: { ...payload.data },
        accessToken: payload.accessToken,
      };
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
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
    case types.GET_CURRENT_USER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default authReducer;
