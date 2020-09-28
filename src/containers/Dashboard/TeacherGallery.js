import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TeacherGallery = () => {
  return (
    <>
      <h1>Teacher Dashboard</h1>
      <h3>Notification</h3>
      <p>You have been assigned with a new course</p>
      <h3>Assigned course</h3>
      <h6>New Assigned</h6>
      <ul>
        <li>course 1</li>
        <li>course 2</li>
      </ul>
      <h6>Courses</h6>
      <ul>
        <li>course 1</li>
        <li>course 2</li>
        <li>course 3</li>
        <li>course 4</li>
      </ul>
    </>
  );
};

export default TeacherGallery;
