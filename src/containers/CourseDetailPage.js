import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { courseActions } from "../redux/actions";

const CourseDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.selectedCourse);
  useEffect(() => {
    if (params && params.id) {
      dispatch(courseActions.getSingleCourse(params.id));
    }
  }, [dispatch, params]);
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
    history.push(`/course/${courseId}/enrol`);
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
      <Button onClick={() => handleClickEnrol(course._id)} />
    </div>
  );
};

export default CourseDetailPage;
