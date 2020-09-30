import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../redux/actions";

// import { logo } from "";

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const [show, handleShow] = useState(false);
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const authLinks = (
    <Nav>
      <Nav.Link as={Link} to="/dashboard">
        <i className="fas fa-chart-line" /> Dashboard
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <i className="fas fa-sign-out-alt" /> Logout
      </Nav.Link>
    </Nav>
  );

  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <i className="fas fa-registered" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <i className="fas fa-sign-in-alt" /> Login
      </Nav.Link>
    </Nav>
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  console.log(show);
  return (
    <div className={`Nav ${show && "nav-white"}`}>
      <Navbar style={{ width: "100%" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          id="logo"
          className="mr-auto"
          style={{ paddingRight: "30px" }}
        >
          {" "}
          eBasketBall
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
