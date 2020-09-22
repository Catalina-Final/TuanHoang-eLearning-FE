import React from "react";
import { Button } from "react-bootstrap";

const UnitCard = ({ unit, handleClickUnit }) => {
  return (
    <>
      <Button
        variant="light"
        onClick={() =>
          handleClickUnit(unit.title, unit.content, unit.unitVideo)
        }
      >
        {unit.title}
      </Button>
    </>
  );
};

export default UnitCard;
