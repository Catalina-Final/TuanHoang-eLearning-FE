import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { courseActions } from "../../../redux/actions/course.actions";
const CourseEditModal = ({ course, handleClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: course && course.title,
    description: course && course.description,
    price: course && course.price,
    images: course && course.image,
    courseId: course && course._id,
  });
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "images") {
      console.log(e.target.files);
      setFormData({ ...formData, images: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, price, courseId } = formData;
    dispatch(courseActions.updateCourse(courseId, title, description, price));
  };

  return (
    <>
      {" "}
      <Modal.Header closeButton>
        <Modal.Title>Manage Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              required
              row={3}
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              rows={3}
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              rows={3}
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="mr-3" type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};
export default CourseEditModal;
