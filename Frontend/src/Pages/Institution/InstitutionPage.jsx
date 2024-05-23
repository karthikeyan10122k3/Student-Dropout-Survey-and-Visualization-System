import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../../Components/Institution/DashBoard";
import Header from "../../Components/Institution/Header";

const Institution = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [institution, setInstitution] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const validUser = location?.state;

      if (validUser?.InstEmail && validUser?.accessToken) {
        try {
          const response = await axios.get(
            "http://localhost:8000/institution/getInstitutionUser"
          );

          const institutions = response.data;
          const institution = institutions.find(
            (user) => user.institutionEmail === validUser?.InstEmail
          );
          setInstitution(institution);

          if (
            !validUser?.InstEmail ||
            !institution ||
            !validUser?.accessToken ||
            institution.role !== "institution"
          ) {
            navigate("/login", { state: { componentToLogin: "institution" } });
          }
        } catch (error) {
          console.error("Error fetching institution user data:", error);
        }
      } else {
        navigate("/login", { state: { componentToLogin: "institution" } });
      }
    };

    fetchData();
  }, [location.state]);

  if (!institution ) {
    return null;
  }

  return (
    <>
      <div style={{ backgroundColor: "#FFA500" }}>
        <Header
          institution={institution}
          setInstitution={setInstitution}
        />
      </div>
      <Dashboard
        institutionName={institution.institutionName}
        institutionCode={institution.institutionCode}
        setInstitution={setInstitution}
      />
    </>
  );
};

export default Institution;
