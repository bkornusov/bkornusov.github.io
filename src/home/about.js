import "./index.css";
import technologies from "../data/technologies";

const About = () => {
  return (
    <div className="about">
      <p className="about-items">
        <span className="title">Batyr Kornusov</span>
        <br />
        <span className="sub-title">Aspiring Software Engineer</span>
      </p>
      <br />
      <div className="tech-icons">
        {technologies.map((tech) => (
          <img className="d-inline" src={tech.image} title={tech.name}></img>
        ))}
      </div>
    </div>
  );
};
export default About;
