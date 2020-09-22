import React from "react";

import { Route, Switch } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayouts";
import DashboardLayout from "../layouts/DashboardLayout";

import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute path="/dashboard" component={DashboardLayout} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
