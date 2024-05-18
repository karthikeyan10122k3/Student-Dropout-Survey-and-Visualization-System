import { Link, useLocation } from "react-router-dom";
import headerStyle from "../../Assets/Styles/Home/header.module.css";

const links = [
  {
    id: 1,
    path: "/",
    pathName: "Home",
  },
  {
    id: 2,
    path: "/aboutUs",
    pathName: "About",
  },
  {
    id: 3,
    path: "/contactUs",
    pathName: "Contact",
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ms-4"
      >
        <img src="/Images/Icon.png" alt="Icon" height={50} width={50} />
        <span className="fs-4">Student Dropout Analysis</span>
      </a>

      <ul className="nav nav-pills me-4">
        {links.map((link) => {
          return (
            <li className="nav-item" key={link.id}>
              <Link
                to={link.path}
                className={`nav-link text-light ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.pathName}
              </Link>
            </li>
          );
        })}
        <div className="dropdown">
          <button
            className="btn dropdown-toggle text-light"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Login
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/login"  state={{ componentToLogin:"government" }}>
                Government Login
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/login"  state={{ componentToLogin: "institution"}}>
              Institution Login
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </header>
  );
};

export default Header;
