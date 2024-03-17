import { useState } from "react";
import "../../Assets/Styles/Registration/studentSignUp.css";
import { dropOutStudentData } from '../../users'

let studentUsers = []; 

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
  
    if (!student.studentName.trim()) {
      newErrors.studentName = "Name is required";
    }
    if (!student.studentEmail.trim()) {
      newErrors.studentEmail = "Email is required";
    }
    if (!student.studentMobileNumber.trim()) {
      newErrors.studentMobileNumber = "Mobile number is required";
    }
    if (!student.studentState.trim()) {
      newErrors.studentState = "State is required";
    }
    if (!student.studentInstituteCode.trim()) {
      newErrors.studentInstituteCode = "Institute code is required";
    }
    if (!student.studentEmisNumber.trim()) {
      newErrors.studentEmisNumber = "EMIS number is required";
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
      let studentData = {
        studentEmisNumber: student.studentEmisNumber,
        studentName: student.studentName,
        studentEmail: student.studentEmail,
        studentMobileNumber: student.studentMobileNumber,
        studentState: student.studentState,
        studentInstituteCode: student.studentInstituteCode,
      };

      studentUsers.push(studentData);
      console.log(studentUsers);

      setStudent({
        studentName: "",
        studentEmail: "",
        studentMobileNumber: "",
        studentState: "",
        studentInstituteCode: "",
        studentEmisNumber: "",
      });
      setTermsAccepted(false);
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
            name="studentName"
            placeholder="Enter your name"
            value={student.studentName}
            onChange={handleInputChange}
          />
          {errors.studentName && <span className="error">{errors.studentName}</span>}
        </div>
        <div className="stud-input-field">
          <input
            type="text"
            name="studentEmail"
            placeholder="Enter your email"
            value={student.studentEmail}
            onChange={handleInputChange}
          />
          {errors.studentEmail && <span className="error">{errors.studentEmail}</span>}
        </div>
        <div className="stud-input-field">
          <input
            type="text"
            name="studentMobileNumber"
            placeholder="Enter mobile number"
            value={student.studentMobileNumber}
            onChange={handleInputChange}
          />
          {errors.studentMobileNumber && (
            <span className="error">{errors.studentMobileNumber}</span>
          )}
        </div>
        <div className="stud-input-field gov-input">
          <input
            type="text"
            name="studentState"
            placeholder="Enter your State"
            value={student.studentState}
            onChange={handleInputChange}
          />
          {errors.studentState && <span className="error">{errors.studentState}</span>}
        </div>
        <div className="stud-input-field">
          <input
            type="text"
            name="studentInstituteCode"
            placeholder="Enter Institute code"
            value={student.studentInstituteCode}
            onChange={handleInputChange}
          />
          {errors.studentInstituteCode && (
            <span className="error">{errors.studentInstituteCode}</span>
          )}
        </div>
        <div className="stud-input-field">
          <input
            type="text"
            name="studentEmisNumber"
            placeholder="Enter EMIS Number"
            value={student.studentEmisNumber}
            onChange={handleInputChange}
          />
          {errors.studentEmisNumber && (
            <span className="error">{errors.studentEmisNumber}</span>
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

export { studentUsers }; 
export default StudentSignUp;

