import React from "react";
import { useLocation } from "react-router-dom";
import individualStyle from "../../../Assets/Styles/Registration/individualLogin.module.css";
import { InstitutionLogin } from "./InstitutionLogin";
import GovernmentLogin from "./GovernmentLogin";

export default function IndividualLogin() {
  const location = useLocation();
  const componentToLogin = location.state?.componentToLogin;
  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${individualStyle.pageBackGroungColor}`}
    >
      {componentToLogin === "government" && <GovernmentLogin />}
      {componentToLogin === "institution" && <InstitutionLogin />}
    </div>
  );
}
