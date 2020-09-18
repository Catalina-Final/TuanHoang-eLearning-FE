const initialState = {
  redirectTo: null,
};

export const SET_REDIRECT_TO = "REDIRECT.SET_REDIRECT_TO";

const redirectReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REDIRECT_TO:
      return { ...state, redirectTo: payload };
    default:
      return state;
  }
};

export default redirectReducer;
