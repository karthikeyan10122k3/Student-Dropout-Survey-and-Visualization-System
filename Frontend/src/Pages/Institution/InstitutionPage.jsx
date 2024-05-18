import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../../Components/Institution/DashBoard";

const Institution = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [institution, setInstitution] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const email = location.state?.InstEmail;

      if (email) {
        try {
          const response = await axios.get("http://localhost:8000/institution/getInstitutionUser");
          const institutions = response.data;
          const institutionUser = institutions.find(user => user.institutionEmail === email);

          if (institutionUser) {
            setInstitution(institutionUser);
            if (!institution) {
              navigate("/login", { state: { componentToLogin: "institution" } });
            }
          } else {
            console.log("Institution user not found");
          }
        } catch (error) {
          console.error("Error fetching institution user data:", error);
        }
      }
    };

    fetchData();
  }, [location.state]);


  if (!institution) {
    return null; 
  }

  return (
    <>
      <Dashboard institutionName={institution.institutionName} institutionCode={institution.institutionCode} /> 
    </>
  );
};

export default Institution;
