import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "../../Components/Institution/Header";
import Dashboard from "../../Components/Institution/DashBoard";

const Institution = () => {
  
  return (
    <>
      <div className="header" style={{ backgroundColor: "#FFA500" }}>
        <Header />
      </div>
       <Dashboard />
    </>
  );
};

export default Institution