import { useState } from "react";
import "../../Assets/Styles/Registration/studentSignUp.css";

let studentData = {}

const StudentSignUp = () => {
  const [student, setStudent] = useState({
    studentName: "",
    studentEmail: "",
    studentMobileNumber: "",
    studentState: "",
    studentInstituteCode: "",
    studentEmisNumber: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!student.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!student.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!student.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    }
    if (!student.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!student.instituteCode.trim()) {
      newErrors.instituteCode = "Institute code is required";
    }
    if (!student.emisNumber.trim()) {
      newErrors.emisNumber = "EMIS number is required";
    }
    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions";
    }
    

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        studentData = {
          studentCode: student.studentEmisNumber,
          studentName: student.studentName,
          studentState: student.studentInstituteCode,
          studentEmail: student.studentEmail,
        }
      window.location.href = "/studentSurvey";
    }
  };

  return (
    <div className="stud-form stud-signup">
      <p>Student Sign-Up</p>
      <form onSubmit={handleSubmit}>
        <div className="stud-input-field">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={student.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        
        <div className="stud-input-field">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={student.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="stud-input-field">
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter mobile number"
            value={student.mobileNumber}
            onChange={handleInputChange}
          />
          {errors.mobileNumber && (
            <span className="error">{errors.mobileNumber}</span>
          )}
        </div>
        <div className="stud-input-field gov-input">
          <input
            type="text"
            name="state"
            placeholder="Enter your State"
            value={student.state}
            onChange={handleInputChange}
          />
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <div className="stud-input-field">
          <input
            type="text"
            name="instituteCode"
            placeholder="Enter Institute code"
            value={student.instituteCode}
            onChange={handleInputChange}
          />
          {errors.instituteCode && (
            <span className="error">{errors.instituteCode}</span>
          )}
        </div>
        <div className="stud-input-field">
          <input
            type="text"
            name="emisNumber"
            placeholder="Enter EMIS Number"
            value={student.emisNumber}
            onChange={handleInputChange}
          />
          {errors.emisNumber && (
            <span className="error">{errors.emisNumber}</span>
          )}
        </div>
        <div className="stud-checkbox-text">
          <div className="stud-checkbox-content">
            <input
              type="checkbox"
              id="stud-termCon"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <label htmlFor="stud-termCon" className="stud-text">
              I accepted all terms and conditions
            </label>
          </div>
          {errors.terms && <span className="error">{errors.terms}</span>}
        </div>
        <div className="stud-input-field stud-button">
          <button type="submit">Start Survey</button>
        </div>
      </form>
    </div>
  );
};

export { studentData }
export default StudentSignUp;
