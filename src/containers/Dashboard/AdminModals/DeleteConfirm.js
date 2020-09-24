import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const DeleteConfirm = ({ course, handleClose }) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Delete Course Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Please confirm delete by typing course name</Form.Label>
            <Form.Control as="input"></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="button">
          Confirm Delete
        </Button>
      </Modal.Footer>{" "}
    </>
  );
};

export default DeleteConfirm;
