import React from "react";
import { CardDeck, Container, Jumbotron, Carousel } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
const HomePage = () => {
  //Fetching data at home page
  return (
    <>
      {/* <Container> */}
      <h1>Home Page</h1>
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>

      <Carousel>
        <Carousel.Item>
          {" "}
          <Jumbotron fluid>
            <Container>
              <h1>1st carou</h1>
              <p>first carou</p>
            </Container>
          </Jumbotron>
        </Carousel.Item>
        <Carousel.Item>
          <Jumbotron fluid>
            <Container>
              <h1>2nd carou</h1>
              <p>2nd carou</p>
            </Container>
          </Jumbotron>
        </Carousel.Item>
        <Carousel.Item>
          <Jumbotron fluid>
            <Container>
              <h1>3rd carou</h1>
              <p>third carou</p>
            </Container>
          </Jumbotron>
        </Carousel.Item>
      </Carousel>
      <div className="scroll-card-deck">
        <CardDeck>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </CardDeck>
      </div>
      <div> </div>
      <Jumbotron fluid>
        <Container>
          <h1>Footer</h1>
          <p>This wrap the end</p>
        </Container>
      </Jumbotron>
      {/* </Container> */}
    </>
  );
};

export default HomePage;
