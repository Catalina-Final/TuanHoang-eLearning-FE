import React, { useEffect } from "react";
import "./Landing.css";
import { gsap } from "gsap";
const Landing = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useEffect(() => {
    tl.to(".text", { y: "0%", duration: 2, stagger: 0.9 });
    tl.to(".slider", { y: "-100%", duration: 2, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 2 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2 });
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
  }, []);
  return (
    <>
      {" "}
      <body>
        <main>
          <section class="landing">
            <h2 class="big-text">Just Dunk It</h2>
          </section>
        </main>
        <div class="intro">
          <div class="intro-text">
            <h1 class="hide">
              <span class="text">Building Your</span>
            </h1>
            <h1 class="hide">
              <span class="text">Basketball Skill</span>
            </h1>
            <h1 class="hide">
              <span class="text">Anywhere With Us</span>
            </h1>
          </div>
        </div>
        <div class="slider"></div>
      </body>
    </>
  );
};

export default Landing;
