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
        <div style={{ backgroundColor: "none" }}>
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
            <h4 style={{ textAlign: "center" }}>Courses</h4>
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
