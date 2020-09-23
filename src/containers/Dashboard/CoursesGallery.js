import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Container, Card, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { courseActions } from "../../redux/actions";

const CoursesGallery = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.course.loading);
  const enrollCourses = useSelector((state) => state.course.enrollCourses);
  const currentUser = useSelector((state) => state.auth.user);
  console.log("asda", enrollCourses);
  useEffect(() => {
    dispatch(courseActions.getEnrollCourses());
  }, [dispatch]);
  return (
    <>
      <Container fluid>
        <h4 className="mt-3">Course Gallery</h4>
        <h6>Enrolled Course</h6>
        <Row className="scroll-card-deck">
          {enrollCourses.map((course) => (
            <EnrolledCourse key={course._id} course={course.course} />
          ))}
        </Row>
        <h6>Suggested Course</h6>
      </Container>
    </>
  );
};

export default CoursesGallery;

export const EnrolledCourse = ({ course }) => {
  const handleClick = () => {
    console.log(0);
  };

  return (
    <Card className="card-overflow">
      <Card.Img
        variant="top"
        src={course.image}
        width="30px"
        height="200px"
        style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
        att="Card image"
      />
    </Card>
  );
};
