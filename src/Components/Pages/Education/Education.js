import React from "react";

const Education = () => {
  return (
    <div>
      <div className="card z-depth-0 back-color">
        <div className="card-content">
          <h6>
            <strong>
              <i className="fas fa-graduation-cap" /> EDUCATION
            </strong>
          </h6>
          <hr />
          <div className="row">
            <div className="col s12">
              <blockquote className="content-right">
                <h6 className="no-pad mt-bottom">
                  <strong>BACHELOR OF SCIENCE (Information Technology)</strong>
                  <span> 2021~2023</span>
                </h6>

                <p>
                  (currently pursuing) from University of Mumbai <br />
                  CGPA: 9 Grade: Distinction
                </p>
              </blockquote>
            </div>

            <div className="col s12">
              <blockquote className="content-right">
                <h6 className="no-pad mt-bottom">
                  <strong>Diploma (Information Technology)</strong>

                  <span> 2014~2017</span>
                </h6>

                <p>
                  Board: MSBTE College: Vidyalankar Polytechnic <br />
                  Percent: 60.00% Grade: First Class
                </p>
              </blockquote>
            </div>

            <div className="col s12">
              <blockquote className="content-right">
                <h6 className="no-pad mt-bottom">
                  <strong>HIGHER SECONDARY SCHOOL (Science)</strong>
                  <span> 2012~2014</span>
                </h6>

                <p>
                  Board: Maharashtra College: Hazarimal somani college of
                  science <br /> Percent: 52.46% Grade: Second Class
                </p>
              </blockquote>
            </div>

            <div className="col s12">
              <blockquote className="content-right">
                <h6 className="no-pad mt-bottom">
                  <strong>SECONDARY SCHOOL</strong>
                  <span> 2002~2012</span>
                </h6>

                <p>
                  Board: Maharashtra College: Mohanbhai chunilal Mehta girls
                  high school <br /> Percent: 75.40% Grade: Distinction
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
