import "../styleComponents/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../logo.png"
const Navbarr = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <nav id="nav" className="navbar navbar-expand-lg fixed-top">
      <div id="text" className="container-fluid">
        <img
          src={Logo}
          alt=""
          width="50px"
          className="d-inline-block align-text-top me-2"
        />
        <a className="navbar-brand" href="#">
          Study Buddy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span id="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="26"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Semister 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Semister 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Semister 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbarr;