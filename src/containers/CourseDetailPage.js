import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { courseActions } from "../redux/actions";

const CourseDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.selectedCourse);
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (params && params.id) {
      dispatch(courseActions.getSingleCourse(params.id));
      dispatch(courseActions.getEnrollment(params.id, currentUser._id));
    }
  }, [dispatch, params, currentUser]);
  const styles = {
    title: {
      color: "red",
      fontWeight: 500,
    },
    description: {
      color: "blue",
    },
  };
  const history = useHistory();
  const handleClickEnrol = (courseId) => {
    history.push(`/course/${courseId}/enroll`);
  };

  const renderForm = (form) => {
    const keys = Object.keys(form);
    return keys.map((e) => {
      return (
        <>
          <p style={styles[e] && styles[e]}> {form[e]}</p>
        </>
      );
    });
  };

  return (
    <div>
      <h1>CourseDetailPage</h1>
      {course && renderForm(course)}
      {course?.enrollment ? (
        <Button>Go To Course</Button>
      ) : (
        <Button onClick={() => handleClickEnrol(course._id)}>Enroll</Button>
      )}
    </div>
  );
};

export default CourseDetailPage;
