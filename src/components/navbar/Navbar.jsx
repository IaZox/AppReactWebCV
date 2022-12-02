import { NavLink} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand"></div>

        <div className={`navbar-menu`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeclassname="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeclassname="is-active"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="navbar-item"
              activeclassname="is-active"
              to="/profile"
            >
              Profile
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
