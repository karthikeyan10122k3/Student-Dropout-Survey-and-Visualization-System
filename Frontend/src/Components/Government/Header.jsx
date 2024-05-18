import { Link } from "react-router-dom";

const Header = ({government}) => {
  console.log(government)
  return (
    <>
      <header className="p-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h1 className="me-lg-auto">{government.governmentState}</h1>
            <div className="text-end">
              <Link className="btn btn-warning me-3" to={"/government/AddInstitution"} state={{government:government}}>
                Add Institution
              </Link>
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
