import "../../Assets/Styles/RegistrationPage/registerContent.css"

import GovernmentSignUp from "./GovernmentSignUp";
import InstitutionSignUp from "./InstitutionSignUp";
import StudentSignUp from "./StudentSignUp";
import { useState } from "react";

const RegisterContent = () => {
  const [user, setUser] = useState("Student");
  
  return (
    <div className="regCon-container">
      <div className="regCon-what">
        <p>Are you?</p>
      </div>
      <div className="regCon-option">
        <button onClick={() => setUser("Government" )}>
          Government
        </button>
        <button onClick={() => setUser("Institution" )}>
          Institution
        </button>
        <button onClick={() => setUser("Student" )}>
          Student
        </button>
      </div>
      {user === "Government" && <GovernmentSignUp />}
      {user === "Institution" && <InstitutionSignUp />}
      {user === "Student" && <StudentSignUp />}
    </div>
  );
};

export default RegisterContent;
