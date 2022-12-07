import React from "react";
import ImgProfile from "../../Images/Photo.jpg";

const Profile = () => {
  return (
    <div>
      <div className="avatarImg">
        <img
          className="circle responsive-img"
          srcSet={ImgProfile}
          alt="Swapnali Dukhande"
        />
      </div>
      <div className="card dark-orange z-depth-0 hide-on-large-only">
        <div className="card-content center social">
          <h3 className="grey-text text-lighten-3">
            <strong>Swapnali Dukhande</strong>
          </h3>
          <h5 className="grey-text text-lighten-1">Front-End Web Developer</h5>
          <a href="https://facebook.com" target="blank">
            <i className="fab fa-facebook-square fa-2x" />
          </a>
          <a href="https://linkedin.com" target="blank">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://codepen.io" target="blank">
            <i className="fab fa-codepen fa-2x" />
          </a>
          <a href="https://github.com" target="blank">
            <i className="fab fa-github-square fa-2x" />
          </a>
        </div>
      </div>
      <div className="card dark-orange z-dept-0">
        <div className="card-content">
          <h6 className="white-text">
            <strong>
              <i className="fa-solid fa-user" /> PROFILE
            </strong>
          </h6>
          <hr />
          <p className="grey-text text-lighten-3 pt">
            Innovative Front End Developer passionate about building and
            maintaining responsive websites. Having good skill set such as
            HTML5, CSS3, Javascript, Java, Python; plus modern libraries and
            frameworks like Reactjs. Passionate about usability and possess
            knowledge of Reactjs, Redux,Jquery, vuejs, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
