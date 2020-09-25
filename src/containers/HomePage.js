import React, { useEffect } from "react";
import { Row, Container, Jumbotron, Col } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { useSelector, useDispatch } from "react-redux";
import { courseActions } from "../redux/actions";
import { ClipLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import Landing from "../components/Landing";

const banner = require("../image/Banner.jpg");
const HomePage = () => {
  //Fetching getAllBlog at home page
  //>>>get current state<<<
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.course.loading);
  // console.log("loading", loading);
  const courses = useSelector((state) => state.course.courses);
  // console.log("courses", courses);
  //>>> Re-render page <<<
  useEffect(() => {
    dispatch(courseActions.getAllCourse());
  }, [dispatch]);
  //>>>use History for clicking<<<
  const history = useHistory();
  const handleClickCourseCard = (courseId) => {
    history.push(`/course/${courseId}`);
  };
  return (
    <>
      {loading ? (
        <div>
          <div className="push-spaces"></div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h4 style={{ fontFamily: "Lobster" }}>Passing the ball</h4>
            <ClipLoader color="#00000" size={150} loading={true} />
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: "none" }}>
          <Landing />
          <Container style={{ padding: "30px" }}>
            <div className="container d-flex flex-column text-center justify-content-center align-content-center align-items-center">
              <img src={banner} style={{ objectFit: "cover" }} />
              <p>
                It's more than training. Being in a environment to be able to
                learn, support and challenge each other is something that we
                truly emphasize. This has created a brotherhood between us that
                stretches over age, school or ethnicity. We are all here to get
                better and respect each others hard work.{" "}
              </p>
              <h5 style={{ fontFamily: "Lobster" }}>
                Focus, Effort and Enthusiasm. Big Ears. Big Eyes. Big Heart.{" "}
              </h5>
              <h5>FOR THE LOVE OF THE GAME. </h5>
            </div>
          </Container>
          <Jumbotron className="homepage-jumbotron-1">
            <Container className="push-spaces">
              <br></br>
              <br></br>
            </Container>
          </Jumbotron>
          <div style={{ textAlign: "center", fontFamily: "Lobster" }}>
            Step Up Your Game
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Courses</h3>
            {courses.length ? (
              <Row className="scroll-card-deck">
                {courses.map((course) => (
                  <CourseCard
                    course={course}
                    key={course._id}
                    handleClick={handleClickCourseCard}
                  />
                ))}
                <div
                  style={{
                    background: "rgb(0,0,0)",
                    background:
                      "linear-gradient(86deg, rgba(105,105,105,1) 100%,rgba(38,38,38,1) 47%, rgba(27,27,27,1) 31%, rgba(0,0,0,1) 0%, rgba(12,12,12,1) 9%,  rgba(78,78,78,1) 87%)",
                  }}
                >
                  <p>more</p>
                  <p>skill</p>
                  <p>are</p>
                </div>
              </Row>
            ) : (
              <p>no course</p>
            )}
          </div>

          <footer className="home-footer">
            <div style={{ padding: "2vw" }}>
              <div className="d-flex">
                <i className="fab fa-simplybuilt fa-2x"></i>
                <h4 className="footer-logo" style={{ marginLeft: "1vw" }}>
                  eBall
                </h4>
              </div>

              <Row>
                <Col style={{ paddingLeft: "0" }}>
                  <h6>Company</h6>
                  <p>About</p>
                  <p>Jobs</p>
                </Col>
                <Col>
                  <h6>Communities</h6>
                  <p>For Artists</p>
                  <p>Developers</p>
                  <p>Brands</p>
                </Col>
                <Col>
                  <h6>Useful Links</h6>
                  <p>Help</p>
                  <p>Web Player</p>
                  <p>Free Mobile App</p>
                  <div className="d-flex flex-row">
                    <i
                      className="fab fa-instagram icon-style fa-3x"
                      style={{ marginRight: "1vw" }}
                    ></i>
                    <i
                      className="fab fa-facebook icon-style fa-3x"
                      style={{ marginRight: "1vw" }}
                    ></i>
                    <i
                      className="fab fa-twitter icon-style fa-3x"
                      style={{ marginRight: "1vw" }}
                    ></i>
                  </div>
                </Col>
              </Row>
            </div>
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
          </footer>
        </div>
      )}
    </>
  );
};

export default HomePage;
