import React from "react";

const { Redirect, Route } = require("react-router-dom");

const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  isAuthenticated = true;
  if (isAuthenticated) return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
};
export default PrivateRoute;
