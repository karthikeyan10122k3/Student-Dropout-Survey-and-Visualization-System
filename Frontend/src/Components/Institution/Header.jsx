import { Link } from "react-router-dom";
import '../../Assets/Styles/Institution/header.css'

const Header = () => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
        <img
          src="...."
          alt="Inst logo"
          width="32"
          height="32"
          className="me-2"
        />
        <h1 className="me-lg-auto">Institution Name</h1>
        <ul className="nav col-12 col-lg-auto mb-2 justify-content-end mb-md-0">
          <li className="dropdown text-end">
            <a
              href="#"
              className="nav-link px-2 link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src=""
                alt="Inst logo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small" style={{}}>
              <li>
                <Link to="/addDropout" className="link-no-underline">
                  <button className="dropdown-item">Add DropOut</button>
                </Link>
              </li>
              <li>
              <Link to="#" className="link-no-underline">
                <button className="dropdown-item" >
                  Remove Dropout
                </button>
                </Link>
              </li>
              <li>
              <Link to="#" className="link-no-underline">
                <button className="dropdown-item" >
                  View Website
                </button>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="/" className="link-no-underline">
                  <button className="dropdown-item">Sign Out</button>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
