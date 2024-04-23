import { Link, NavLink } from "react-router-dom";
import "../../Assets/Styles/Institution/header.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ institutionName, setActiveComponent }) => {
  const [institutionWebsiteURL, setInstitutionWebsiteURL] = useState("");

  useEffect(() => {
    const fetchInstitutionUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/institution/getInstitutionUser"
        );
        const institutionUser = response.data.find(
          (user) => user.institutionName === institutionName
        );
          setInstitutionWebsiteURL(institutionUser.institutionWebsite);
        
      } catch (err) {
        console.log(err);
      }
    };

    fetchInstitutionUser();
  }, [institutionName]);

  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
        <h1 className="me-lg-auto">{institutionName}</h1>
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
            
            <ul className="dropdown-menu text-small" style={{}}>
              <li>
                <button
                  onClick={() => setActiveComponent("add")}
                  className="dropdown-item"
                >
                  Add DropOut
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent("remove")}
                  className="dropdown-item"
                >
                  Remove Dropout
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent("view")}
                  className="dropdown-item"
                >
                  View Dropout
                </button>
              </li>
              <li>
                {institutionWebsiteURL && (
                  <button className="dropdown-item btn btn-link text-decoration-none">
                    <a
                      href={institutionWebsiteURL}
                      className="text-decoration-none text-dark"
                    >
                      View Website
                    </a>
                  </button>
                )}
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent("profile")}
                  className="dropdown-item"
                >
                  Profile
                </button>
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
