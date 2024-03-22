import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "../../Components/Government/Header";
import Dashboard from "../../Components/Government/DashBoard";

const Government = () => {
  return (
    <>
      <div className="header" >
      <Header />
      </div>
      <Dashboard />
    </>
  );
};

export default Government;
