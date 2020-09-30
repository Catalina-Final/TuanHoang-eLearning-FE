import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { authActions, courseActions } from "../../../redux/actions";
const AssignModal = ({ course, handleClose }) => {
  const selectedCourse = useSelector((state) => state.course.selectedCourse);
  const users = useSelector((state) => state.auth.users);
  // const currentUser = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseActions.getSingleCourse(course._id));
    dispatch(authActions.getAllUser());
  }, [course]);

  const [formData, setFormData] = useState({
    selectedCourse: selectedCourse,
  });
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseId = selectedCourse._id;
    const teacherId = formData.teacher;
    dispatch(courseActions.assignTeacher(courseId, teacherId));
  };
  const handleUnassign = (teachingId) => {
    dispatch(courseActions.unAssignTeacher(teachingId));
  };

  return (
    <>
      {" "}
      <Modal.Header closeButton>
        <Modal.Title>Manage Teacher</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onChange={(e) => {
            setFormData({ teacher: e.target.value });
          }}
        >
          <h5>Teachers:</h5>
          {selectedCourse &&
            selectedCourse.teacherss.map((teacher) => {
              return (
                <p className="d-flex justify-content-between">
                  <span>{teacher.teacher.name}</span>
                  <span>
                    <Button
                      variant="dark"
                      onClick={() => handleUnassign(teacher._id)}
                    >
                      Unassign
                    </Button>
                  </span>
                </p>
              );
            })}
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              {users
                .filter((el) => el.role === "teacher")
                .map((e) => (
                  <option value={e._id} key={e._id}>
                    {e.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Confirm Assign
        </Button>
      </Modal.Footer>
    </>
  );
};

export default AssignModal;
