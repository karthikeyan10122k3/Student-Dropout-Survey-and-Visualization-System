import { Link } from "react-router-dom";
// import "../../Assets/Styles/Government/header.css";

const Header = () => {
  return (
    <>
      <header class="p-2">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h1 className="me-lg-auto">Ministry of Education</h1>
            <div class="text-end">
              <Link to="/" class="btn btn-warning">
                Sign-Out
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
