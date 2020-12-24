import React from "react";
import ZigZag from "./ZigZag";

function Header() {
  return (
    <>
      <header id="header">
        <div className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="content">
          <span className="name">Ramon Audain</span>
          <span className="title">Software Developer</span>
          <ZigZag />
        </div>
      </header>
      <div className="headerBlend" />
    </>
  );
}

export default Header;
