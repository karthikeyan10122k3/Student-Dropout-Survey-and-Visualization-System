import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "../../Components/Government/Header";
import Dashboard from "../../Components/Government/DashBoard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";


const Government = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [government, setGovernment] = useState(null);
  const [accessToken , setAccessToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const validLogin = location?.state;

      if (validLogin?.govEmail && validLogin?.accessToken) {
        try {
          const response = await axios.get(
            "http://localhost:8000/government/getUsers"
          );
          const governments = response.data;
          const government = governments.find(
            (government) => government.governmentEmail === validLogin?.govEmail
          );
          setGovernment(government);
          setAccessToken(validLogin?.accessToken)
          if (!validLogin?.govEmail || !government || !validLogin?.accessToken || government.role !== "government") {
            navigate("/login", { state: { componentToLogin: "government" } });
          }
        } catch (error) {
          console.error("Error fetching Government user data:", error);
        }
      }else{
        navigate("/login", { state: { componentToLogin: "government" } });
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
        <Header government={government} setGovernment={setGovernment} accessToken={accessToken}/>
      </div>
      <Dashboard governmentState={government.governmentState} />
    </>
  );
};

export default Government;
