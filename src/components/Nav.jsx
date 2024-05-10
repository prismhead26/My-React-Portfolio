import { Link, useLocation } from "react-router-dom";
// Nav component to render the navigation bar
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#6d4c41" }}
      >
        <div className="container fluid">
          <a className="custom navbar-brand" href="/">
            <b>
              <i>Aiden&apos;s Portfolio App</i>
            </b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="custom mx-2 nav-item">
                <Link
                  to="/"
                  className={
                    currentPage === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  <b>
                    <i>About</i>
                  </b>
                </Link>
              </li>
              <li className="custom mx-2 nav-item">
                <Link
                  to="/portfolio"
                  className={
                    currentPage === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <b>
                    <i>Portfolio</i>
                  </b>
                </Link>
              </li>
              <li className="custom mx-2 nav-item">
                <Link
                  to="/contact"
                  className={
                    currentPage === "/contact" ? "nav-link active" : "nav-link"
                  }
                >
                  <b>
                    <i>Contact</i>
                  </b>
                </Link>
              </li>
              <li className="custom mx-2 nav-item">
                <Link
                  to="/resume"
                  className={
                    currentPage === "/resume" ? "nav-link active" : "nav-link"
                  }
                >
                  <b>
                    <i>Resume</i>
                  </b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
