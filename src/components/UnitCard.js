import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const UnitCard = ({ unit, handleClickUnit }) => {
  return (
    <>
      <Button variant="light" onClick={() => handleClickUnit(unit._id)}>
        {unit.title}
        <span>: {unit.content}</span>
      </Button>
    </>
  );
};

export default UnitCard;
