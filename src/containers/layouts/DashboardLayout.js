import React from "react";
import PublicNavbar from "../PublicNavbar";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AlertMsg from "./AlertMsg";
import SideMenu from "../Dashboard/SideMenu";
import CoursesGallery from "../Dashboard/CoursesGallery";
import { useSelector } from "react-redux";
import TeacherGallery from "../Dashboard/TeacherGallery";
import AdminGallery from "../Dashboard/AdminGallery";

const DashboardLayout = () => {
  const currentUser = useSelector((state) => state.auth.user);

  const divertRouteRole = () => {
    console.log(currentUser.role);
    if (currentUser.role == "student") {
      return <CoursesGallery />;
    } else if (currentUser.role == "teacher") {
      return <TeacherGallery />;
    } else if (currentUser.role == "admin") {
      return <AdminGallery />;
    }
    return;
  };
  return (
    <>
      <PublicNavbar />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              <Route
                exact
                path="/dashboard/courses"
                component={divertRouteRole}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
