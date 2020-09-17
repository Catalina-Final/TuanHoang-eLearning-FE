import React from "react";
import PublicNavbar from "../PublicNavbar";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { Col, Container, Row } from "react-bootstrap";
import { Switch, Route } from "react-router";
import NotFoundPage from "../NotFoundPage";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Row>
        <Col className="ads-left" style={{ border: "1px solid grey" }}>
          {" "}
          PAID ADS{" "}
        </Col>
        <Col xs={10} className="center-main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Col>
        <Col className="ads-right" style={{ border: "1px solid grey" }}>
          PAID ADS
        </Col>
      </Row>
      <footer style={{ border: "1px solid grey" }}>
        <h2>this is afooter</h2>
        <p>ola this alo</p>
      </footer>
    </>
  );
};

export default PublicLayout;
