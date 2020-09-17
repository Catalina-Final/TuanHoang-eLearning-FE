import React from "react";
import { Card } from "react-bootstrap";

const CourseCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/160x100" />
      <Card.Body>
        <Card.Title>Course Title</Card.Title>
        <Card.Text>This course will help you ...</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
