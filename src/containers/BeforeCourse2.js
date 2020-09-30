import React from "react";
import { Button, Col, Image, Jumbotron, Row } from "react-bootstrap";

const BeforeCourse2 = () => {
  return (
    <>
      <Jumbotron>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Image
              src="https://lh5.googleusercontent.com/DfUwxJhXWXOv7Fvlxe8Pm4vDO_mtNFwezU2Fmwt9b67FBOfeB8mfsZsXlPXZwH0KLqY8gYcX_Kp89RPbyFeq0i6Wl3V2ciiDr-l1eiCmhh_WdZ5vmA=w1280"
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
              Daniel Co Tran <cite title="Source Title">Year of 2018</cite>
            </footer>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default BeforeCourse2;
