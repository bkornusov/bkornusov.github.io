import "./index.css";
import technologies from "../data/technologies";

const About = () => {
  return (
    <div className="section" id="about">
      <p className="about-items">
        <span className="title">Batyr Kornusov</span>
        <br />
        <span className="sub-title">Aspiring Software Engineer</span>
      </p>
      <br />
      <div className="links">
        <span>Contact me:</span>
        <br />
        <a
          onClick={copyToClipboard}
          className="btn btn-outline-light"
          role="button"
        >
          <i className="bi bi-envelope-fill"></i>
          <span>batyrkornusov@gmail.com</span>
        </a>
        <span id="copy-success" className="ps-2 pt-1" style={{ opacity: 0 }}>
          Copied!
        </span>
        <br />
        <a
          href="https://www.linkedin.com/in/bkornusov"
          className="btn btn-outline-light"
          role="button"
        >
          <i className="bi bi-linkedin"></i>
          <span>linkedin.com/in/bkornusov</span>
        </a>
        <br />
        <a
          href="https://github.com/bkornusov"
          className="btn btn-outline-light"
          role="button"
        >
          <i className="bi bi-github"></i>
          <span>github.com/bkornusov</span>
        </a>
      </div>
      {/* <div className="tech-icons">
        {technologies.map((tech) => (
          <img className="d-inline" src={tech.image} title={tech.name}></img>
        ))}
      </div> */}
    </div>
  );
};
export default About;

function copyToClipboard() {
  navigator.clipboard.writeText("batyrkornusov@gmail.com");
  var message = document.getElementById("copy-success");
  message.style.opacity = 1;
  setTimeout(() => {
    message.style.opacity = 0;
  }, 1500);
}
