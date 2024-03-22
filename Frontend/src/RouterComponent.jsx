

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import RegisterPage from "./Pages/Registration/RegisterPage";
import StudentSignUp from "./Components/Registration/StudentSignUp";
import InstitutionPage from "./Pages/Institution/InstitutionPage";
import StudentSurveyPage from "./Pages/Student/StudentSurveyPage";
import GovernmentPage from "./Pages/Government/GovernmentPage";


const RouterComponent = () => {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/student" element={<StudentSignUp />} />
          <Route path="/institution" element={<InstitutionPage />} />
          <Route path="/government" element={<GovernmentPage />} />
          <Route path="/studentSurvey" element={<StudentSurveyPage />} />
        </Routes>
    </Router>
  );
};

export default RouterComponent;
