import React from "react";
import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Experiances from "./Experiances/Experiances";
import Portfolio from "./Portfolio/Portfolio";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Home = () => {
  return (
    <section>
      <div
        className="row sameHeight"
        style={{ borderRadius: "5px", padding: "2px" }}
      >
        <div className="col s15 m12 l4 back-color ">
          <Profile />
          <Contact />
          <Skills />
          <PersonalInfo />
        </div>
        <div className="col s12 m12 l8 back-color-right">
          <About />
          <Education />
          <Experiances />
          <Portfolio />
        </div>
      </div>
    </section>
  );
};

export default Home;
