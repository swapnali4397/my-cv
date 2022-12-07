import React from "react";

const About = () => {
  return (
    <div>
      <div className="card z-depth-0 hide-on-med-and-down pt back-color-right">
        <div className="card-content social">
          <h3 className="grey-text text-darken-3">
            <strong>Swapnali Dukhande</strong>
          </h3>
          <h6
            className="grey-text text-darken-1"
            style={{ paddingBottom: "5px", fontSize: "1.5rem" }}
          >
            Front-End Web Developer
          </h6>
          <a href="https://www.facebook.com/djswapnali4" target="blank">
            <i className="fab fa-facebook-square fa-2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/swapnali-dukhande-895592136/"
            target="blank"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://codepen.io/djswapnali" target="blank">
            <i className="fab fa-codepen fa-2x" />
          </a>
          <a href="https://github.com/swapnali4397" target="blank">
            <i className="fab fa-github-square fa-2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
