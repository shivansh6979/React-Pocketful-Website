import React from "react";
import "./homepage.css";
const HomeNav = () => {
  return (
    <div className="homenav">
      <div className="nav">
        <div className="links">
          <span className="d">D</span>
          <span>LEARN</span>
          <span>BLOG</span>
          <span>BOOKMARK</span>
          <span>UI KIT</span>
          <span>LAIN NYA</span>
        </div>
        <div className="icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HomeNav;
