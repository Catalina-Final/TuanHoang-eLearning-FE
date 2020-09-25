import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import UnitCard from "../../components/UnitCard";
import { courseActions } from "../../redux/actions";

const StudentCourseDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.selectedCourse);
  const currentUser = useSelector((state) => state.auth.user);
  const [currentUnit, setCurrentUnit] = useState({
    title: "Please Select Unit",
    content: "Select the unit on the left menu to view detail",
  });
  useEffect(() => {
    if (params && params.id) {
      dispatch(courseActions.getSingleCourse(params.id));
      if (currentUser) {
        dispatch(courseActions.getEnrollment(params.id, currentUser._id));
      }
    }
  }, [dispatch, params, currentUser]);
  const handleClickUnit = (title, content, video) => {
    setCurrentUnit({ ...currentUnit, title, content, video });
    console.log(currentUnit);
  };
  return (
    <>
      <h1>{course && course.title}</h1>
      <h3>List of Units</h3>
      <Row>
        <Col md={4} className="d-flex flex-column align-items-start">
          {course &&
            course.units.map((unit, index) => {
              return (
                <UnitCard
                  unit={unit}
                  handleClickUnit={handleClickUnit}
                  key={index}
                />
              );
            })}
        </Col>
        <Col md={8}>
          <h4>{currentUnit && currentUnit.title}</h4>
          <h6>Content : </h6>
          <p>{currentUnit && currentUnit.content}</p>
          <iframe
            width="600"
            height="345"
            src={`https://www.youtube.com/embed/${currentUnit.video}?autoplay=1&mute=1`}
            frameBorder="1.5"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </>
  );
};

export default StudentCourseDetail;
