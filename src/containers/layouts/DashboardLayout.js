import React from "react";
import PublicNavbar from "../PublicNavbar";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AlertMsg from "./AlertMsg";
import SideMenu from "../Dashboard/SideMenu";
import CoursesGallery from "../Dashboard/CoursesGallery";

const DashboardLayout = () => {
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
                component={CoursesGallery}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
