import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BeforeCourse = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex text-center"
        style={{
          backgroundColor: "rgb(233, 242, 241)",
          padding: "15px",
          margin: "0",
        }}
      >
        <Row>
          {" "}
          <Col xs={12} sm={6} md={3} className="d-flex flex-column">
            <i
              class="fas fa-running fa-4x "
              style={{ color: "blueviolet" }}
            ></i>
            <h4>Stamina</h4>
            <p>
              Qualified regime from top tier players guarantee to help you
              enhance your stamina and game endurance.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex flex-column">
            <i
              class="fas fa-basketball-ball fa-4x "
              style={{ color: "blueviolet" }}
            ></i>
            <h4>The ball</h4>
            <p>
              Gain insight of the basketballl from pro players. Lessons are
              dedicated to explain into deep detail of the basketball
              manipulation technique that proved to be the recipe of success.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex flex-column">
            <i class="far fa-user fa-4x " style={{ color: "blueviolet" }}></i>
            <h4>Your Brand</h4>
            <p>
              Build your value as a basketball player. Establish your brand in
              the market with our supporting trainers who have great impact on
              the current basketball scene.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex flex-column">
            <i
              class="fas fa-hands-helping fa-4x "
              style={{ color: "blueviolet" }}
            ></i>
            <h4>Community</h4>
            <p>
              Our presence in the basketball comunity is well-recognized and
              supportive. As a learner from our courses, you are easily earn
              your spot in the basketball coomunity with the values we proud
              off.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BeforeCourse;
