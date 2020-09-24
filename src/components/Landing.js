import React from "react";

const Landing = () => {
  return (
    <>
      {" "}
      <div className="landing">
        <h1 id="logo">eball</h1>
        <ul className="nav-link">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <h2 className="big-text">In middle</h2>
      </div>
      ;
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">first</span>
          </h1>
          <h1 className="hide">
            <span className="text">second</span>
          </h1>
          <h1 className="hide">
            <span className="text">third</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </>
  );
};

export default Landing;
