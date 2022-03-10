import React from "react";
import img from "../img/image.png";
export default function Header() {
  return (
    <>
      <header>
        <img src={img} alt="" />
        <h2 className="header-title">Laura Smith</h2>
        <h4 className="light-gray fs-13 lh-15 fw-400">Frontend Developer</h4>
        <h5 className="fs-10 fw-400 mt-1">laurasmith.website</h5>
      </header>
    </>
  );
}
