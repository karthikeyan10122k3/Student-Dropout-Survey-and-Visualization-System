import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Institution/Header";
import Dashboard from "../../Components/Institution/DashBoard";

const Institution = () => {
  const location = useLocation();
  const [institutionName, setInstitutionName] = useState("");
  const [institutionCode, setInstitutionCode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const email = location.state && location.state.InstEmail;
      try {
        const response = await axios.get("http://localhost:8000/getInstitutionUser/login");
        const institutions = response.data;
        const institutionUser = institutions.find(user => user.institutionEmail === email);
        if (institutionUser) {
          setInstitutionName(institutionUser.institutionName);
          setInstitutionCode(institutionUser.institutionCode);
        } else {
          console.log("Institution user not found");
        }
      } catch (error) {
        console.error("Error fetching institution user data:", error);
      }
    };

    fetchData(); 
  }, [location.state]);

  return (
    <>
      <div className="header" style={{ backgroundColor: "#FFA500" }}>
        <Header institutionName={institutionName} /> 
      </div>
      <Dashboard institutionName={institutionName} institutionCode={institutionCode} /> 
    </>
  );
};

export default Institution;
