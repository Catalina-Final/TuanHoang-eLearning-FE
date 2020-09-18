import { SET_REDIRECT_TO } from "../reducers/redirect.reducer";

const setRedirectTo = (redirectTo) => ({
  type: SET_REDIRECT_TO,
  payload: redirectTo,
});

export const redirectActions = {
  setRedirectTo,
};
