import "../../Assets/Styles/Registration/registerContent.css";
import GovernmentSignUp from "./GovernmentSignUp";
import InstitutionSignUp from "./InstitutionSignUp";
import { useState } from "react";

const RegisterContent = () => {
  const [user, setUser] = useState("Institution");
  
  return (
    <div className="container mt-2 text-center"> 
      <div className="row">
        <div className="col">
          <div className="regCon-what">
            <p className="h3">Are you?</p>
          </div>
          <div className="regCon-option">
            <button className="btn btn-primary btn-lg mr-2" onClick={() => setUser("Government" )}>
              Government
            </button>
            <button className="btn btn-primary btn-lg mr-2" onClick={() => setUser("Institution" )}>
              Institution
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="col">
          {user === "Government" && <GovernmentSignUp />}
          {user === "Institution" && <InstitutionSignUp />}
        </div>
      </div>
    </div>
  );
};

export default RegisterContent;
