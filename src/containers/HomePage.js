import React, { useEffect } from "react";
import { Row, Container, Jumbotron, Col } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { useSelector, useDispatch } from "react-redux";
import { courseActions } from "../redux/actions";
import { ClipLoader } from "react-spinners";
import { useHistory } from "react-router-dom";

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
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
        <div style={{ backgroundColor: "rgb(255, 191, 128)" }}>
          <h1 style={{ textAlign: "center" }}>Attri-Build</h1>
          <Jumbotron fluid className="homepage-jumbotron-1">
            <Container className="push-spaces">
              <br></br>
              <br></br>
            </Container>
          </Jumbotron>
          <div style={{ textAlign: "center" }}>
            Start building your value now !
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>Courses</h1>
            {courses.length ? (
              <Row className="scroll-card-deck">
                {courses.map((course) => (
                  <CourseCard
                    course={course}
                    key={course._id}
                    handleClick={handleClickCourseCard}
                  />
                ))}
              </Row>
            ) : (
              <p>no course</p>
            )}
          </div>

          <footer className="home-footer">
            <div style={{ padding: "2vw" }}>
              <i class="fab fa-simplybuilt fa-2x"></i>
              <span className="footer-logo" style={{ marginLeft: "1vw" }}>
                Attri-Build
              </span>

              <Row>
                <Col style={{ paddingLeft: "0" }}>
                  <h1>Company</h1>
                  <p>About</p>
                  <p>Jobs</p>
                  <p>For the Record</p>
                </Col>
                <Col>
                  <h1>Communities</h1>
                  <p>For Artists</p>
                  <p>Developers</p>
                  <p>Brands</p>
                  <p>Investors</p>
                  <p>Vendors</p>
                </Col>
                <Col>
                  <h1>Useful Links</h1>
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

              <Row className="d-flex justify-content-between">
                <div
                  className="d-flex justify-content-between"
                  style={{ width: "50vw" }}
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
                <div>Vietnam</div>
              </Row>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default HomePage;
