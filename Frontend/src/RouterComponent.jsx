import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ContactUs from "./Components/Home/ContactUs";
import RegisterPage from "./Pages/Registration/RegisterPage";
import StudentSignUp from "./Components/Registration/StudentSignUp";
import InstitutionPage from "./Pages/Institution/InstitutionPage";
import StudentSurveyPage from "./Pages/Student/StudentSurveyPage";
import GovernmentPage from "./Pages/Government/GovernmentPage";
import AboutUs from "./Components/Home/AboutUs";
import IndividualLogin from "./Components/Registration/login/IndividualLogin";
import IndividualSignUp from "./Components/Registration/register/IndividualSignUp";
import AddInstitution from "./Components/Government/AddInstitution";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register/options" element={<RegisterPage />} />
        <Route path="/register" element={<IndividualSignUp />} />
        <Route path="/login" element={<IndividualLogin />} />
        <Route path="/login/student" element={<StudentSignUp />} />
        <Route path="/institution" element={<InstitutionPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/government/AddInstitution" element={<AddInstitution />} />
        <Route path="/studentSurvey" element={<StudentSurveyPage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
