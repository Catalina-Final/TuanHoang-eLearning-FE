import React, { useEffect } from "react";
import { Row, Container, Jumbotron, Carousel } from "react-bootstrap";
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
        <div>
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
          <Jumbotron fluid>
            <Container>
              <h1>Our Courses</h1>
              <p>the courses</p>
            </Container>
          </Jumbotron>
          <div>
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

          <Jumbotron fluid>
            <Container>
              <h1>Footer</h1>
              <p>This wrap the end</p>
            </Container>
          </Jumbotron>
          {/* */}
        </div>
      )}
    </>
  );
};

export default HomePage;
