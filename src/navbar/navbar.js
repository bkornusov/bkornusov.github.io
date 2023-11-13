import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-body align-items-center ps-3 pe-3">
      <a href="#" className="">
        <img
          src={
            "https://media.licdn.com/dms/image/D4E35AQEslUR1RRUV0w/profile-framedphoto-shrink_400_400/0/1681089791771?e=1698904800&v=beta&t=YHY4dC_XfZRmIJSBl_NZfYF-u0pmEHGp-WCG7Wo9Hgs"
          }
          alt=""
          className="profile-picture"
        />
      </a>
      <button onClick={DropDown} className="btn" id="btn-drop-down">
        <i className="bi bi-list" id="drop-down-inactive"></i>
        <i className="bi bi-x" id="drop-down-active"></i>
      </button>
      <ul className="nav-items" id="nav-items">
        <li className="nav-item">
          <a href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#">EXPERIENCE</a>
        </li>
        <li className="nav-item">
          <a href="#">EDUCATION</a>
        </li>
        <li className="nav-item">
          <a href="#">PROJECTS</a>
        </li>
      </ul>
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
