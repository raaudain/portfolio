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
        <div className="intro">
          <p className="name">Ramon Audain</p>
          <p className="title">Software Developer</p>
          <ZigZag />
        </div>
      </header>
      <div className="headerBlend" />
    </>
  );
}

export default Header;
