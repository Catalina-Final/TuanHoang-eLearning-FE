import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

const CourseCard = ({ course, handleClick }) => {
  // console.log("Course Card data check", course);
  return (
    <Card className="card-overflow">
      <Card.Img
        id="course-image"
        variant="top"
        src={course.image}
        height="200px"
        style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
        att="Card image"
      />
      <Card.Body>
        <Card.Title onClick={() => handleClick(course._id)} id="card-title">
          {course.title}
        </Card.Title>
        <Card.Text>{course.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {" "}
          Updated <Moment fromNow>{course.createdAt}</Moment>
        </small>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
