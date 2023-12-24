import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-body align-items-center">
      <a href="#" className="">
        <img src={"../images/batyr.jpg"} alt="" className="profile-picture" />
      </a>
      <button onClick={DropDown} className="btn" id="btn-drop-down">
        <i className="bi bi-list" id="drop-down-inactive"></i>
        <i className="bi bi-x" id="drop-down-active"></i>
      </button>
      <ul className="nav-items" id="nav-items">
        <li className="nav-item">
          <a href="#about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li className="nav-item">
          <a href="#education">EDUCATION</a>
        </li>
        <li className="nav-item">
          <a href="#projects">PROJECTS</a>
        </li>
      </ul>
      {/* <div className="email">
        <i className="bi bi-envelope-fill pe-1"></i>
        <span>batyrkornusov@gmail.com</span>
      </div> */}
    </div>
  );
}
export default Navbar;

function DropDown() {
  var navItemsDisplay = document.getElementById("nav-items");
  var buttonList = document.getElementById("drop-down-inactive");
  var buttonCross = document.getElementById("drop-down-active");
  if (
    !navItemsDisplay.style.display ||
    navItemsDisplay.style.display === "none"
  ) {
    console.log(buttonCross.style.display);
    buttonList.style.display = "none";
    buttonCross.style.display = "block";

    navItemsDisplay.style.display = "block";
  } else {
    console.log(buttonList.style.display);
    buttonList.style.display = "block";
    buttonCross.style.display = "none";

    navItemsDisplay.style.display = "none";
  }
}
//var  = document.getElementById("nav-items");
