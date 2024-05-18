import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "../../Components/Government/Header";
import Dashboard from "../../Components/Government/DashBoard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Government = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [government, setGovernment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const govEmail = location.state?.govEmail;

      if (govEmail) {
        try {
          const response = await axios.get(
            "http://localhost:8000/government/getUsers"
          );
          const governments = response.data;
          const government = governments.find(
            (government) => government.governmentEmail === govEmail
          );
          setGovernment(government);
          if (!govEmail || !government || government.role !== "government") {
            navigate("/login", { state: { componentToLogin: "government" } });
          }
        } catch (error) {
          console.error("Error fetching Government user data:", error);
        }
      }
    };
    fetchData();
  }, [location.state]);


  if (!government || government.role !== "government") {
    return null; 
  }

  return (
    <>
      <div className="header">
        <Header government={government} />
      </div>
      <Dashboard governmentState={government.governmentState} />
    </>
  );
};

export default Government;
