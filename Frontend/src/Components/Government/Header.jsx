import { Link } from "react-router-dom";

const Header = ({governmentState}) => {
  return (
    <>
      <header className="p-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h1 className="me-lg-auto">{governmentState}</h1>
            <div className="text-end">
              <Link to="/" className="btn btn-warning">
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
