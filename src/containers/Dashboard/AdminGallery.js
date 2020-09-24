import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Moment from "react-moment";

import { useSelector, useDispatch } from "react-redux";
import { authActions, courseActions } from "../../redux/actions";
import AssignModal from "./AdminModals/AssignModal";
import CourseEditModal from "./AdminModals/CourseEditModal";
import DeleteConfirm from "./AdminModals/DeleteConfirm";
const AdminGallery = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.course.loading);
  const courses = useSelector((state) => state.course.courses);
  const users = useSelector((state) => state.auth.users);
  const [foo, setFoo] = useState("hllo");
  const [selectedCourse, setSelectedCourse] = useState();
  //   const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(courseActions.getAllCourse());
  }, [dispatch]);

  const renderModal = () => {
    switch (foo) {
      case "assign":
        return (
          <AssignModal course={selectedCourse} handleClose={handleClose} />
        );
      case "edit":
        return (
          <CourseEditModal course={selectedCourse} handleClose={handleClose} />
        );
      case "delete":
        return (
          <DeleteConfirm course={selectedCourse} handleClose={handleClose} />
        );
      default:
        return;
    }
  };
  const showAllUser = () => {
    dispatch(authActions.getAllUser());
  };

  useEffect(() => {
    // console.log(users);
    console.log(courses);
  }, [users, courses]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (course, foo) => {
    dispatch(courseActions.getAllCourse());
    setFoo(foo);
    setShow(true);
    setSelectedCourse(course);
  };

  return (
    <>
      {" "}
      <h1>Courses Management</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>No.units</th>
            <th>Date created</th>
            <th>Enrollments</th>
            <th>Teaching</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr>
                <td>{course.title}</td>
                <td>{course.units.length}</td>
                <td>{new Date(course.createdAt).toDateString()}</td>
                <td>{course.enrollmentCount}</td>
                <td>
                  {course.teachers.reduce(
                    (names, teacher) => names + teacher.teacherName,
                    ""
                  )}
                </td>
                <td>
                  <Button
                    variant="light"
                    onClick={() => handleShow(course, "edit")}
                  >
                    Edit course
                  </Button>
                  <Button
                    variant="bright"
                    onClick={() => handleShow(course, "assign")}
                  >
                    Assign
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleShow(course, "delete")}
                  >
                    X
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h1>All user</h1>
      <Button onClick={showAllUser}>showAllUser</Button>
      <ol>
        {users.map((user) => {
          return (
            <li>
              {user.name}
              <span>{user.role}</span>
              <span>
                Joined <Moment fromNow>{user.createdAt}</Moment>
              </span>
            </li>
          );
        })}
      </ol>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {renderModal()}
      </Modal>
    </>
  );
};

export default AdminGallery;
