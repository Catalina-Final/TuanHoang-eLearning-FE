import React from "react";
import { Button, Col, Image, Jumbotron, Row } from "react-bootstrap";

const BeforeCourse2 = () => {
  return (
    <>
      <Jumbotron>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Image
              src="https://image.cnbcfm.com/api/v1/image/105642793-1545408067309gettyimages-1074484904.jpeg?v=1545408690"
              roundedCircle
              width="100%"
              height="100%"
            />
          </Col>
          <Col xs={12} sm={6} md={8}>
            <i
              className="fas fa-quote-left fa-2x"
              style={{ color: "blueviolet" }}
            ></i>
            <p>
              I was a player with lack of confident. I knew I was a good player
              deep down, but I would get nervous when comes to game time. Next
              level is a place for one to fail in order to achieve improvement.
              Through many games opportunities and strong encouragement from
              Stefan and the brothers at E-basketball, I can see a boost in my
              progress. From being happy with just scoring a few points to
              average more than ten points a game.
            </p>
            <footer className="blockquote-footer">
              John Doe <cite title="Source Title">Year of 2018</cite>
            </footer>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default BeforeCourse2;
