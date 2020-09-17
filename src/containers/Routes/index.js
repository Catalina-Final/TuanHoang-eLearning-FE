import React from "react";

import { Route, Switch } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayouts";
import DashboardPage from "../DashboardPage";

import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
