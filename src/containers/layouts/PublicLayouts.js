import React from "react";
import PublicNavbar from "../PublicNavbar";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";

import { Switch, Route } from "react-router";
import NotFoundPage from "../NotFoundPage";
import CourseDetailPage from "../CourseDetailPage";
import PrivateRoute from "../Routes/PrivateRoute";
import CheckOut from "../CheckOut";
import AlertMsg from "./AlertMsg";
import StudentCourseDetail from "../AcademyPortal/StudentCourseDetail";

const PublicLayout = () => {
  return (
    <>
      <div>
        <PublicNavbar />
        <AlertMsg />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/course/:id" component={CourseDetailPage} />
          <PrivateRoute
            exact
            path="/course/:id/learn"
            component={StudentCourseDetail}
          />

          <PrivateRoute exact path="/course/:id/enroll" component={CheckOut} />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  );
};

export default PublicLayout;
