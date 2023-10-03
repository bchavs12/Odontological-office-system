import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${isDarkMode ? "navbar-dark dark" : "navbar-light lightMode"
          }`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            Odonto schedule
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className={`nav-link ${isDarkMode ? "darkLink" : "" }`} to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className={`nav-link ${isDarkMode ? "darkLink" : "" }`} to="/login">
                  Login
                </Link>
              </li>
              <li className={`nav-item`}>
                <button
                  className={`btn ${isDarkMode ? "btn-light" : "btn-dark"} ${styles.btnStyle}`}
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? "☀" : "🌙"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
