import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/Styles/Student/studentSurveyPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const StudentSurvey = () => {
  const location = useLocation();
  const navigate  = useNavigate()
  const [studentState, setStudentState] = useState("");
  useEffect(() => {
    const state = location.state && location.state?.studentInstituteState;
    setStudentState(state);
  }, [location.state]);
  useEffect(() => {
    if (!studentState) {
      navigate("/login/student");
    }
  }, [studentState]);

  if (!studentState) {
    return null; 
  }
  
  const [formData, setFormData] = useState({
    dropoutStudentDate: "",
    religion: "",
    age: "",
    gender: "",
    socioeconomicStatus: "",
    schoolType: "",
    previousPerformance: "",
    dropoutReason: "",
    futurePlans: "",
    employmentGoals: "",
    furtherEducationPlans: "",
    studentInstituteState: studentState,
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      studentInstituteState: studentState,
    }));
  }, [studentState]);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.dropoutStudentDate.trim()) {
      errors.dropoutStudentDate = "Date of Birth is required";
      isValid = false;
    }

    if (!formData.religion.trim()) {
      errors.religion = "Religion is required";
      isValid = false;
    }

    if (!formData.age.trim()) {
      errors.age = "Age is required";
      isValid = false;
    }

    if (!formData.gender.trim()) {
      errors.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.socioeconomicStatus.trim()) {
      errors.socioeconomicStatus = "Socioeconomic Status is required";
      isValid = false;
    }

    if (!formData.schoolType.trim()) {
      errors.schoolType = "Type of School Attended is required";
      isValid = false;
    }

    if (!formData.previousPerformance.trim()) {
      errors.previousPerformance = "Previous Academic Performance is required";
      isValid = false;
    }

    if (!formData.dropoutReason.trim()) {
      errors.dropoutReason = "Reason For Dropout is required";
      isValid = false;
    }

    if (!formData.futurePlans.trim()) {
      errors.futurePlans = "Future Plans is required";
      isValid = false;
    }

    if (!formData.employmentGoals.trim()) {
      errors.employmentGoals =
        "Employment Goals or Plans for Entering the Workforce is required";
      isValid = false;
    }

    if (!formData.furtherEducationPlans.trim()) {
      errors.furtherEducationPlans =
        "Plans for Further Education or Training is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
    try {
      await axios.post("http://localhost:8000/student/surveySubmit", formData);
      alert("Survey Submitted Successfully!");
    } catch (error) {
      console.error("Error adding Dropout Student Survey:", error);
    }
      window.location.href = "/";
    }
  };

  return (
    <div className="container mb-5">
      <h2 className="text-center my-4">Survey Form</h2>
      <div className="container"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">Dropout Date:</label>
          <input
            type="date"
            name="dropoutStudentDate"
            value={formData.dropoutStudentDate}
            onChange={handleChange}
            className={`form-control ${
              errors.dropoutStudentDate && "is-invalid"
            }`}
          />
          {errors.dropoutStudentDate && (
            <div className="invalid-feedback">{errors.dropoutStudentDate}</div>
          )}
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">Religion:</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">Gender:</label>
          <div className="radio-buttons">
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />{" "}
              Female
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
              />{" "}
              Other
            </div>
          </div>
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">Socioeconomic Status:</label>
          <input
            type="text"
            name="socioeconomicStatus"
            value={formData.socioeconomicStatus}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group mb-4 ">
          <label className="font-weight-bold mb-1">
            Type of School Attended:
          </label>
          <div className="radio-buttons">
            <div>
              <input
                type="radio"
                name="schoolType"
                value="public"
                onChange={handleChange}
              />{" "}
              Public
            </div>
            <div>
              <input
                type="radio"
                name="schoolType"
                value="private"
                onChange={handleChange}
              />{" "}
              Private
            </div>
          </div>
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">
            Previous Academic Performance:
          </label>
          <textarea
            name="previousPerformance"
            value={formData.previousPerformance}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">Reason For Dropout:</label>
          <select
            name="dropoutReason"
            value={formData.dropoutReason}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="lack_of_interest">Lack of interest</option>
            <option value="academic_difficulties">Academic difficulties</option>
            <option value="family_issues">Family issues</option>
            <option value="personal_issues">Personal issues</option>
            <option value="bullying">Bullying</option>
            <option value="peer_pressure">Peer pressure</option>
            <option value="health_issues">Health issues</option>
            <option value="illegal_activities">Illegal activities</option>
            <option value="accessibility_issues">Accessibility issues</option>
            <option value="dissatisfaction_with_teachers">
              Dissatisfaction teachers
            </option>
            <option value="pregnancy">Pregnancy</option>
            <option value="employment_reasons">Employment reasons</option>
            <option value="financial_reasons">Financial Reasons</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">Future Plans:</label>
          <textarea
            name="futurePlans"
            value={formData.futurePlans}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group mb-4">
          <label className="font-weight-bold mb-1">
            Employment Goals or Plans for Entering the Workforce:
          </label>
          <textarea
            name="employmentGoals"
            value={formData.employmentGoals}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group mb-4">
          <label className="mb-1">
            Plans for Further Education or Training:
          </label>
          <textarea
            name="furtherEducationPlans"
            value={formData.furtherEducationPlans}
            onChange={handleChange}
            className="form-control "
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="alert alert-success mt-3" role="alert">
          Survey Form Submitted Successfully
        </div>
      )}
    </div>
  );
};



export default StudentSurvey;
