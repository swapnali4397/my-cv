import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="card z-depth-0 back-color">
        <div className="card-content">
          <h6>
            <strong>
              <i className="fa-solid fa-link" /> PROJECT LINKS
            </strong>
          </h6>
          <hr />
          <div className="row">
            <div className="col s12">
              <blockquote className="content-right">
                <h6 className="no-pad mt-bottom">
                  <strong>HTML5 CSS3 and Javascript based Project:</strong>
                </h6>
                <a
                  className="slink"
                  href="https://omnifood-project-swapnali.netlify.app/"
                  target="blank"
                >
                  Omnifood Project
                </a>
                <br />

                <a
                  className="slink"
                  href="https://forkify-v2.netlify.app/#5ed6604591c37cdc054bcd09"
                  target="blank"
                >
                  Forkify Recipe App Project
                </a>
              </blockquote>
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>

      <div className="card z-depth-0 back-color-right">
        <div className="card-content main">
          <p id="sign" className="mt-bottom content-right">
            I, Swapnali Dukhande, hereby declare that the information contained
            herein is true and correct to the best of my knowledge and belief.
          </p>
          <img
            srcSet="https://i.ibb.co/6wfrHgF/sign.jpg"
            alt="sign"
            border="0"
            class="circle responsive-img signature"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
<i class="fa-solid fa-link-simple"></i>;
