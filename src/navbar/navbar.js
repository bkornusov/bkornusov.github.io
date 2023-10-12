import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-body align-middle">
      <ul className="nav flex-column">
        <li className="nav-item">
          <img className="profile-picture"></img>
        </li>
        <li className="nav-item">ABOUT</li>
        <li className="nav-item">EXPERIENCE</li>
        <li className="nav-item">EDUCATION</li>
        <li className="nav-item">PROJECTS</li>
      </ul>
    </div>
  );
};
export default Navbar;
