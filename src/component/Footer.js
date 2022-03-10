import React from "react";
import facebook from "../img/Facebook Icon.png";
import GitHub from "../img/GitHub Icon.png";
import Instagram from "../img/Instagram Icon.png";
import Twitter from "../img/Twitter Icon.png";

export default function Footer() {
  return (
    <>
      <footer>
        <img src={Twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={GitHub} alt="" />
      </footer>
    </>
  );
}
