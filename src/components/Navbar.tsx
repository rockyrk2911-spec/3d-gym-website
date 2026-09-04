import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active-nav" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top gym-navbar">
      <div className="container">

        <NavLink className="navbar-brand gym-logo" to="/">
          IRON<span>X</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gymNavbar"
          aria-controls="gymNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="gymNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <NavLink className={navClass} to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/services">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/activities">
                Activities
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/trainers">
                Trainers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-2">
              <NavLink className="gym-btn" to="/contact">
                Join Now
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}