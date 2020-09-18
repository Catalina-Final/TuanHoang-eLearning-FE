import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { courseActions, redirectActions } from "../redux/actions";

const CheckOut = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.selectedCourse);
  const currentUser = useSelector((state) => state.auth.user);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const history = useHistory();
  const redirectTo = useSelector((state) => state.redirect.redirectTo);

  const handleConfirm = () => {
    if (course && course._id) {
      dispatch(courseActions.enrollCourse(course._id, accessToken));
    }
  };

  useEffect(() => {
    if (params && params.id) {
      dispatch(courseActions.getSingleCourse(params.id));
      dispatch(courseActions.getEnrollment(params.id, currentUser._id));
    }
    // eslint-disable-next-line
  }, [dispatch, params]);

  useEffect(() => {
    console.log(redirectTo);
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(redirectActions.setRedirectTo(""));
      } else {
        history.push(redirectTo);
        dispatch(redirectActions.setRedirectTo(""));
      }
    }
  }, [redirectTo, dispatch, history]);

  return (
    <div>
      <h1>Course: {course?.title}</h1>
      <h3>Student: {currentUser?.name}</h3>
      <h3>Role: {course?.enrollment ? course.enrollment : "Guest"}</h3>

      <Button variant="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </div>
  );
};

export default CheckOut;
