import React from "react";
import { Card, Nav } from "react-bootstrap";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

const SideMenu = () => {
  const currentUser = useSelector((state) => state.auth.user);
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/profile"
            activeClassName="active"
            strict={true}
          >
            <div className="d-flex justify-content-between">
              <p>Profile</p> <p>@{currentUser.role}</p>
            </div>
          </Nav.Link>
          <div className="container-fluid">
            <Card>
              <Card.Img
                variant="top"
                src={currentUser.avatar}
                height="200px"
                style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
                att="Card image"
              />
              <Card.Body>
                <Card.Title>{currentUser.name}</Card.Title>
                <Card.Text>somthing here</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {" "}
                  Joined <Moment fromNow>{currentUser.createdAt}</Moment>
                </small>
              </Card.Footer>
            </Card>
          </div>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/courses"
            activeClassName="active"
            strict={true}
          >
            Courses
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/contact"
            activeClassName="active"
            strict={true}
          >
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/tools"
            activeClassName="active"
            strict={true}
          >
            Tools
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideMenu;
