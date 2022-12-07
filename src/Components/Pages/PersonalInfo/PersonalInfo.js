import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="card dark-orange z-dept-0">
        <div className="card-content">
          <h6 className="white-text">
            <strong>
              <i className="fas fa-person" /> PERSONAL INFORMATION
            </strong>
          </h6>
          <hr />
          <div className="row">
            <div className="col s12 mt">
              <p className="grey-text text-lighten-3">
                <strong>Birth Date: </strong>
                <p style={{ display: "inline" }}>04 March 1997</p>
              </p>
              <p className="grey-text text-lighten-3 ">
                <strong>Nationality: </strong>
                <p style={{ display: "inline" }}>Indian</p>
              </p>
              <p className="grey-text text-lighten-3 ">
                <strong>Gender: </strong>
                <p style={{ display: "inline" }}>Female</p>
              </p>
              <p className="grey-text text-lighten-3 ">
                <strong>Marital Status: </strong>
                <p style={{ display: "inline" }}>Single</p>
              </p>
              <p className="grey-text text-lighten-3 ">
                <strong>Languages: </strong>
                <p style={{ display: "inline" }}>
                  English, Hindi, Marathi, Gujrati
                </p>
              </p>
              <p className="grey-text text-lighten-3 ">
                <strong>Hobbies: </strong>
                <p style={{ display: "inline" }}>
                  Swimming, Singing, Reading Books
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
