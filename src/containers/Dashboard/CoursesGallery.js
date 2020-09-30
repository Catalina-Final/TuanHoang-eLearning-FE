import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Container, Card, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { courseActions } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const CoursesGallery = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.course.loading);
  const enrollCourses = useSelector((state) => state.course.enrollCourses);
  const currentUser = useSelector((state) => state.auth.user);
  console.log("asda", enrollCourses);
  useEffect(() => {
    dispatch(courseActions.getEnrollCourses());
  }, [dispatch]);
  const history = useHistory();
  const handleClickCourse = (courseId) => {
    history.push(`/course/${courseId}`);
  };
  return (
    <>
      <Container fluid>
        <h4 className="mt-3">Course Gallery</h4>
        <h6>Enrolled Course</h6>
        <Row className="scroll-card-deck">
          {enrollCourses.map((course) => (
            <EnrolledCourse
              key={course._id}
              course={course.course}
              handleClickCourse={handleClickCourse}
            />
          ))}
        </Row>
        <h6>Your Progress</h6>
        {/* <Line /> */}
      </Container>
    </>
  );
};

export default CoursesGallery;

export const EnrolledCourse = ({ course, handleClickCourse }) => {
  return (
    <Card className="card-overflow" style={{ maxWidth: "30px" }}>
      <Card.Img
        variant="top"
        src={course.image}
        width="30px"
        height="200px"
        style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
        att="Card image"
        onClick={() => handleClickCourse(course._id)}
      />
    </Card>
  );
};
