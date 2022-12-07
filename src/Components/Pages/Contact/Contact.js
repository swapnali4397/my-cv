import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="card dark-orange z-dept-0">
        <div className="card-content">
          <h6 className="white-text">
            <strong>
              <i className="fas fa-phone" /> CONTACT
            </strong>
          </h6>
          <hr />
          <p className="grey-text text-lighten-3 pt">
            <strong>Address: </strong>
            <p style={{ display: "inline" }}>
              317/A, Sangharsh Sadan, A.G. Pawar Lane, Ferbander, Byculla,
              Mumbai - 400 027
            </p>
          </p>
          <p className="grey-text text-lighten-3 ">
            <strong>Phone: </strong>
            <p style={{ display: "inline" }}>+91 8779780168</p>
          </p>
          <p className="grey-text text-lighten-3 ">
            <strong>Email:</strong>{" "}
            <p style={{ display: "inline", fontSize: "14.5px" }}>
              swapnalidukhande98@gmail.com
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
