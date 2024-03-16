import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import RegisterPage from "./Pages/Registration/RegisterPage";
import InstitutionPage from "./Pages/Institution/InstitutionPage";
import AddDropout from "./Pages/Institution/AddDropout";
import StudentSurveyPage from './Pages/Student/StudentSurveyPage'
import GovernmentPage from './Pages/Government/GovernmentPage'

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/institution" element={<InstitutionPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/addDropout" element={<AddDropout />} />
        <Route path="/studentSurvey" element={<StudentSurveyPage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
