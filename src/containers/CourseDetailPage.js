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
      // if (currentUser) {
      //   dispatch(courseActions.getEnrollment(params.id, currentUser._id));
      // }
    }
  }, [dispatch, params]);

  const history = useHistory();
  const handleClickEnrol = (courseId) => {
    history.push(`/course/${courseId}/enroll`);
  };
  const handleToLearn = (courseId) => {
    history.push(`/course/${courseId}/learn`);
  };

  const dunkcover = require("../image/dunkcover.jpg");

  // const foo = (id, arr) => {
  //   const ;
  // }
  return (
    <div>
      <img src={dunkcover} style={{ width: "100%" }} alt="course detail" />
      <h1 style={{ textAlign: "center" }}>{course && course.title}</h1>
      <Row>
        <Col xs={8}>
          <h2>Description</h2>
          <p>
            The Ebasketballs, consistently ranked among the nation's top three
            accounting programs, is a revered destination for accounting
            education globally. The online provides students with skills in
            thinking, data mining, and strategic accounting. The accounting
            degree is intentionally flexible to address the needs of today’s
            students: whether they seek to begin their career as an accountant,
            become a pro, improve their standing in the accounting field and
            become a god, or want to leverage skills in their existing
            non-accounting career.
          </p>
          <h2>Outcomes</h2>
          <p>
            The Game is undergoing rapid change. New player need to become
            proficient in leading techniques and tools; . All of this on top of
            a traditional accounting education. These needs with instruction
            from some of the very best accounting faculty in the world.
            Graduates from our program are in high-demand because they possess
            the most sought-after skills. Our alumni have gone on to become
            world-renowned founders of businesses, , accounting firm partners,
            entrepreneurs, and other business leaders. Theis flexibly designed
            to meet the needs of the modern day student; whether you want to
            transition into accounting, sit for the exam, become a pro, or apply
            leading basket skills into your existing skills.
          </p>
        </Col>
        <Col className="test">
          <p>
            Cost<span>19.99$</span>
          </p>
          <p>
            Duration<span>12 weeks</span>
          </p>
          <p>
            Benefit<span>10 hours court hire</span>
          </p>
          <p>
            Outcome<span>able to perform skills</span>
          </p>
          <br></br>
          <div>
            <p>Stamina basic</p>
            <p>Advance handingling</p>
            <p>Shooting basic</p>
            <p>Mental</p>
            <ul>
              <li>Trainers</li>
              <li>Basketball Sneaker</li>
              <li>Phone Camera</li>
              <li>Headphones</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {course &&
        course.students.findIndex((el) => el.student === currentUser._id) !==
          -1 ? (
          <Button onClick={() => handleToLearn(course._id)}>
            Go To Course
          </Button>
        ) : (
          <Button onClick={() => handleClickEnrol(course._id)}>Enroll</Button>
        )}
      </Row>
    </div>
  );
};

export default CourseDetailPage;
