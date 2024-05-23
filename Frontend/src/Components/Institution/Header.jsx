import { Link, NavLink } from "react-router-dom";
import "../../Assets/Styles/Institution/header.css";

const Header = ({ institution, setInstitution }) => {
  

  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
        <h1 className="me-lg-auto">{institution.institutionName}</h1>
        <NavLink
          onClick={() => setActiveComponent("dashBoard")}
          className="nav-link px-2 link-body-emphasis text-decoration-none"
        >
          Home
        </NavLink>
        <ul className="nav col-12 col-lg-auto mb-2 justify-content-end mb-md-0">
          <li className="dropdown text-end">
            <button
              className="nav-link px-2 link-body-emphasis text-decoration-none dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/Images/profile-pic.png"
                alt="profile pic"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </button>

            <ul className="dropdown-menu text-small" >
              <li>
                {institution.institutionWebsite && (
                  <button className="dropdown-item btn btn-link text-decoration-none">
                    <a
                      href={institution.institutionWebsite}
                      className="text-decoration-none text-dark"
                    >
                      View Website
                    </a>
                  </button>
                )}
              </li>
              <li>
                <button
                  className="dropdown-item"
                >
                  Profile
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  onClick={() => {
                    setInstitution(null);
                  }}
                >
                  Sign Out
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
