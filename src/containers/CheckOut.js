import React, { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
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
    <>
      <div className="container">
        <Row className="d-flex flex-column" style={{ height: "100vh" }}>
          <Col sx={6}>
            <Container>
              <p>
                Congratulation {currentUser?.name}, you are taking the first
                step closer to your Goal!
              </p>
              <p>Finish the confirmation step below to start learning now</p>

              <h2>Course: {course?.title}</h2>
              <h3>{course?.description}</h3>
              <Table striped bordered hover size="sm">
                <tbody>
                  <tr>
                    <td>Current Amount</td>
                    <td>$194</td>
                  </tr>
                  <tr>
                    <td>Course Price</td>
                    <td>$10</td>
                  </tr>
                  <tr style={{ color: "green" }}>
                    <td>
                      <em>Discount</em>
                    </td>
                    <td colSpan="2">
                      <em>-$3.4</em>
                    </td>
                  </tr>
                  <tr
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    <td>Total</td>
                    <td>${10 - 3.4}</td>
                  </tr>
                  <tr
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    <td>New Balance</td>
                    <td>${194 - 10 - 3.4}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex justify-content-between">
                <p>
                  <em>*these price are VAT included</em>
                </p>
                <Button variant="primary" type="submit" onClick={handleConfirm}>
                  Enroll
                </Button>
              </div>
            </Container>
          </Col>
          <Col sx={6}>
            <p>Here! check out one of our latest Graduate</p>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ue1NT3QhuVU?autoplay=1&mute=1"
              title="Video"
            ></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CheckOut;
