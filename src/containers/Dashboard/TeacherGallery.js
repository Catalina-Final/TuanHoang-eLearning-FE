import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TeacherGallery = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.course.loading);
  const teachingCourses = useSelector((state) => state.course.teachingCourses);
  const currentUser = useSelector((state) => state.auth.user);

  return <div>teachinasdg</div>;
};

export default TeacherGallery;
