import React from "react";
import icon from "../img/Icon.png";
import Vector from "../img/Vector.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <button className="btn">
        <img src={icon} alt="" />
        <Link to="/email">Email</Link>
      </button>
      <button className="btn blue ">
        <img src={Vector} alt="" />
        <Link to="/" className="white">
          LinkedIn
        </Link>
      </button>
    </>
  );
}
