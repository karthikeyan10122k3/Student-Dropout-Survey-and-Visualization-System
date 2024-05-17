import React from 'react'
import { useLocation } from 'react-router-dom'
import { GovernmentLoginComponent, InstitutionLoginComponent } from './Login'
import individualStyle from "../../Assets/Styles/Registration/individualLogin.module.css"


export default function IndividualLogin() {
  const location = useLocation()
  const componentToLogin = location.state?.componentToLogin;
  
  return (
    <div className={`d-flex align-items-center justify-content-center vh-100 ${individualStyle.pageBackGroungColor}`}>
      {(componentToLogin === "government" && <GovernmentLoginComponent />)}
      {(componentToLogin === "institution" && <InstitutionLoginComponent />)}

    </div>
  )
}
