import React from "react";
import { useLocation } from "react-router-dom";
import individualStyle from "../../../Assets/Styles/Registration/individualLogin.module.css";

import GovernmentSignUp from "./GovernmentSignUp";
import InstitutionSignUp from "./InstitutionSignUp";

export default function IndividualSignUp() {
  const location = useLocation();
  const componentToSignUp = location.state?.componentToSignUp;

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${individualStyle.pageBackGroungColor} `}
    >
      {componentToSignUp === "government" && <GovernmentSignUp />}
      {componentToSignUp === "institution" && <InstitutionSignUp />}
    </div>
  );
}
