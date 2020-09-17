import React from "react";
import PublicNavbar from "../PublicNavbar";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router";
import NotFoundPage from "../NotFoundPage";
import CourseDetailPage from "../CourseDetailPage";

const PublicLayout = () => {
  return (
    <>
      <Container>
        <PublicNavbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/course/:id" component={CourseDetailPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
