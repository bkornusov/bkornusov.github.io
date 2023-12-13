import "./index.css";
import jobs from "../data/jobs";

const Experience = () => {
  return (
    <div className="section" id="experience">
      <p className="logo-text">
        <span className="title">Experience</span>
        <br />
        <div className="job-list">
          {jobs.map((job) => (
            <div className="float-none">
              <div>
                <span className="sub-title">{job.title}</span>
              </div>
              <br />
              <div style={{ clear: "left" }}>{job.dates}</div>
              <br />
              <ul className="job-description mt-2">
                {job.description.map((item) => (
                  <li>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <span></span>
      </p>
    </div>
  );
};
export default Experience;
