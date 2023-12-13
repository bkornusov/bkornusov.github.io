import React from "react";

import About from "./about";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";
import "./index.css";

const Home = () => {
  return (
    <div className="home-body">
      <About />
      <hr />
      <Experience />
      <hr />
      <Projects />
    </div>
  );
};
export default Home;
