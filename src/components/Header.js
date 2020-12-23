import React from "react";
import ZigZag from "./ZigZag";

function Header() {
  return (
    <>
      <div id="header">
        <div className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="content">
          <span id="name">Ramon Audain</span>
          <span id="title">Software Developer</span>
          <ZigZag />
        </div>
      </div>
      <div id="headerBlend" />
    </>
  );
}

export default Header;
