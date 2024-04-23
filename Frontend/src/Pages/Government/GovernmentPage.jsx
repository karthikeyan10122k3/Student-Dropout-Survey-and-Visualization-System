import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "../../Components/Government/Header";
import Dashboard from "../../Components/Government/DashBoard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Government = () => {
  const location = useLocation();
  const [governmentState, setGovernmentState] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const govEmail = location.state && location.state.govEmail;
      try {
        const response = await axios.get("http://localhost:8000/government/getUsers");
        const governments = response.data;
        const government = governments.find((government) => government.governmentEmail === govEmail);
        setGovernmentState(government.governmentState);
      } catch (error) {
        console.error("Error fetching Government user data:", error);
      }
    };

    fetchData(); 
  }, [location.state]);

  return (
    <>
      <div className="header" >
      <Header governmentState={governmentState}/>
      </div>
      <Dashboard governmentState={governmentState}/>
    </>
  );
};

export default Government;
