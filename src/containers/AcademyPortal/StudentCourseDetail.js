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
  const [currentUnit, setCurrentUnit] = useState("nothing");
  useEffect(() => {
    if (params && params.id) {
      dispatch(courseActions.getSingleCourse(params.id));
      if (currentUser) {
        dispatch(courseActions.getEnrollment(params.id, currentUser._id));
      }
    }
  }, [dispatch, params, currentUser]);
  const handleClickUnit = (unitId) => {
    setCurrentUnit(unitId);
  };
  return (
    <>
      <h1>{course && course.title}</h1>
      <Row>
        <Col md={4}>
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
        <Col md={8}>{currentUnit}</Col>
      </Row>
    </>
  );
};

export default StudentCourseDetail;
