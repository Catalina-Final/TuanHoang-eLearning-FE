import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const BetweenBeforeCourse = () => {
  return (
    <>
      <Card className="text-center" style={{ overflow: "hidden" }}>
        <Card.Img
          src="https://lh4.googleusercontent.com/sG1QEih5NaDUycnPnnWCxG0v81Mj1alqbh_TfM9TM8vLRp8-Y4iGnnIZMCmHTmIFSK0JaKw=w1280"
          height="10%"
          alt="Card image"
          style={{ backgroundColor: "white", opacity: "0.7" }}
        />
        <Card.ImgOverlay
          className="d-flex flex-column"
          style={{ justifyContent: "center" }}
        >
          <Container
            className="overlay-box"
            style={{
              border: "1px solid whitesmoke",
              backgroundColor: "white",
              opacity: "0.8",
              marginTop: "1vh",
              paddingBottom: "4vh",
              overflow: "scroll",
            }}
          >
            <Card.Title style={{ paddingTop: "3vh" }}>
              <h3 style={{ fontFamily: "Lobster", fontWeight: "bold" }}>
                E-Basketball
              </h3>
            </Card.Title>
            <Card.Text>
              <h5 style={{ fontFamily: "Heebo" }}>JUST DUNK IT</h5>
            </Card.Text>
            <Card.Title>
              <h3 style={{ fontWeight: "bolder" }}>Become a Learner</h3>
            </Card.Title>
            <Card.Text>
              <p>
                Explore the largest basketball skill share community and start
                building your own value.
              </p>
              <p>
                We support eachother by Leading, Empowering, Communicating and
                Teamwork
              </p>{" "}
              <p>Practice and patience is key and time is essence</p>.
              <p>So Don't Wait! Start Practice Now!</p>
            </Card.Text>
            <Button variant="dark">Join Us</Button>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default BetweenBeforeCourse;
