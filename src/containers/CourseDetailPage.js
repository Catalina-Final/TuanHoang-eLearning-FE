import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
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

      if (currentUser) {
        dispatch(courseActions.getEnrollment(params.id, currentUser._id));
      }
    }
  }, [dispatch, params, currentUser]);

  const history = useHistory();
  const handleClickEnrol = (courseId) => {
    history.push(`/course/${courseId}/enroll`);
  };

  const dunkcover = require("../image/dunkcover.jpg");
  return (
    <div>
      <img src={dunkcover} style={{ width: "100%" }} alt="course detail" />
      <h1 style={{ textAlign: "center" }}>{course && course.title}</h1>
      <Row>
        <Col xs={8}>
          <h2>Description</h2>
          <p>
            The University of Illinois’ Gies College of Business, consistently
            ranked among the nation's top three accounting programs, is a
            revered destination for accounting education globally. The online
            Master of Science in Accounting (iMSA) provides students with skills
            in analytical thinking, data mining, and strategic accounting. The
            accounting degree is intentionally flexible to address the needs of
            today’s students: whether they seek to begin their career as an
            accountant, become a CPA, improve their standing in the accounting
            field and become a CFO, or want to leverage analytical skills in
            their existing non-accounting career.
          </p>
          <h2>Outcomes</h2>
          <p>
            The accounting industry is undergoing rapid change. New accountants
            need to become proficient in leading analytical techniques and
            tools; programming in Python and R, data mining, statistical
            analysis and regression. All of this on top of a traditional
            accounting education. The iMSA meets these needs with instruction
            from some of the very best accounting faculty in the world.
            Graduates from our program are in high-demand because they possess
            the most sought-after skills. Our alumni have gone on to become
            world-renowned founders of businesses, CEOs, CFOs, accounting firm
            partners, entrepreneurs, and other business leaders. The iMSA is
            flexibly designed to meet the needs of the modern day student;
            whether you want to transition into accounting, sit for the CPA
            exam, become a CFO, or apply leading analytics skills into your
            existing career.
          </p>
        </Col>
        <Col className="test">
          <p>cost</p>
          <p>duration</p>
          <p>benefit</p>
          <p>outcome</p>
          <br></br>
          <div style={{ border: "1px solid grey" }}>
            <p>Requirement</p>
            <p>Requirement</p>
            <p>Requirement</p>
            <p>Requirement</p>
            <ul>
              <li>Equipment</li>
              <li>Equipment</li>
              <li>Equipment</li>
              <li>Equipment</li>
              <li>Equipment</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {course?.enrollment ? (
          <Button>Go To Course</Button>
        ) : (
          <Button onClick={() => handleClickEnrol(course._id)}>Enroll</Button>
        )}
      </Row>
    </div>
  );
};

export default CourseDetailPage;
