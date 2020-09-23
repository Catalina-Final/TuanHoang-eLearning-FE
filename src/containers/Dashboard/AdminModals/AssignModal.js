import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { authActions, courseActions } from "../../../redux/actions";
const AssignModal = ({ course, handleClose }) => {
  const selectedCourse = useSelector((state) => state.course.selectedCourse);
  const users = useSelector((state) => state.auth.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseActions.getSingleCourse(course._id));
    dispatch(authActions.getAllUser());
  }, [course]);

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    if (e.target.name === "images") {
      console.log(e.target.files);
      setFormData({ ...formData, images: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  console.log("----", users);
  return (
    <>
      {" "}
      <Modal.Header closeButton>
        <Modal.Title>Manage Teacher</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedCourse &&
          selectedCourse.teachers.map((teacher) => {
            return <p>{teacher.teacher.name}</p>;
          })}
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            {users
              .filter((el) => el.role == "teacher")
              .map((e) => (
                <option>{e.name}</option>
              ))}
          </Form.Control>
        </Form.Group>
        <Button variant="light">Add teacher</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </>
  );
};

export default AssignModal;
