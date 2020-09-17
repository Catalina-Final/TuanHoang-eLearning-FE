import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

const CourseCard = ({ course, handleClick }) => {
  // console.log("Course Card data check", course);
  return (
    <Card className="card-overflow">
      <Card.Img
        variant="top"
        src="https://img.lovepik.com/element/45000/5558.png_860.png"
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
