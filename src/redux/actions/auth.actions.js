import * as types from "../constants/auth.constants";
import api from "../api";
import { alertActions } from "./alert.actions";
import { redirectActions } from "./redirect.actions";

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/user/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};
const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    console.log("authaction", res);
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    const name = res.data.data.user.name;
    dispatch(alertActions.setAlert(`Welcome back, ${name}`, "success"));
    //IMPORTANT FOR PERSIT LOGIN
    localStorage.setItem("accessToken", res.data.data.accessToken);
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};
const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.setItem("accessToken", "");

  dispatch({ type: types.LOGOUT, payload: null });
  dispatch(alertActions.setAlert(`Soooo longggg mate`, "success"));
};
const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/user", { name, email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    dispatch(
      alertActions.setAlert(
        `Account Created Success! Welcome to AttriBute, ${name} `,
        "success"
      )
    );
    dispatch(redirectActions.setRedirectTo("/"));
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};
const getAllUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/user/");
    dispatch({ type: types.GET_ALL_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_ALL_USER_FAILURE, payload: error });
  }
};
export const authActions = {
  loginRequest,
  getCurrentUser,
  logout,
  register,
  getAllUser,
};
