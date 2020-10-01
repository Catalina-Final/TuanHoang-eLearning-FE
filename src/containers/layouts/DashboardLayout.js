import React from "react";
import PublicNavbar from "../PublicNavbar";
import { Container, Row, Col, Image } from "react-bootstrap";
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

      <Container fluid style={{ marginTop: "13vh", paddingBottom: "40vh" }}>
        <Row>
          <SideMenu />
          <Col sx={12} md={8} lg={10}>
            <AlertMsg />

            <Switch>
              {/* <Route path="/dashboard" component={FakeCalendar} /> */}

              <Route path="/dashboard/courses" component={divertRouteRole} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Row
        className="d-flex justify-content-between"
        style={{ backgroundColor: "grey" }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ width: "50vw", paddingLeft: "2vw" }}
        >
          <div>
            <a href="/">Legal</a>
          </div>
          <div>
            <a href="/">Privacy Center</a>
          </div>
          <div>
            <a href="/">Privacy Policy</a>
          </div>
          <div>
            <a href="/">Cookies</a>
          </div>
          <div>
            <a href="/">About Ads</a>
          </div>
        </div>
        <div style={{ paddingRight: "3vw" }}>Vietnam</div>
      </Row>
    </>
  );
};

export default DashboardLayout;
export const FakeCalendar = () => {
  return (
    <>
      <Container className="text-center">
        <h3 style={{ fontFamily: "Lobster" }}> Welcome to E-Basketball</h3>
        <h5>Academy Dashboard</h5>
        <p>
          In here you will find all the material that assist your journey at
          E-Basketball Please use the side panel on the left to navigate through
          the system{" "}
        </p>
        <Image src="https://www.betacalendars.com/uploads/2019/01/September-2020-Calendar.jpg"></Image>
      </Container>
    </>
  );
};
