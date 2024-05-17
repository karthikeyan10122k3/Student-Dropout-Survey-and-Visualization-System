import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Assets/Styles/Registration/studentSignUp.css";

const StudentSignUp = () => {
  const navigate = useNavigate();
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
      studentAuthentication(student, setStudent, setTermsAccepted, navigate);
    }
  };

  return (
    <div className="page-center">
      <div className="container smaller-container mt-2 mb-5 p-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary font-weight-bold text-center text">
                  Student Sign-Up
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="studentName"
                      placeholder="Enter your name"
                      value={student.studentName}
                      onChange={handleInputChange}
                    />
                    {errors.studentName && (
                      <span className="text-danger">{errors.studentName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="studentEmail"
                      placeholder="Enter your email"
                      value={student.studentEmail}
                      onChange={handleInputChange}
                    />
                    {errors.studentEmail && (
                      <span className="text-danger">{errors.studentEmail}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="studentMobileNumber"
                      placeholder="Enter mobile number"
                      value={student.studentMobileNumber}
                      onChange={handleInputChange}
                    />
                    {errors.studentMobileNumber && (
                      <span className="text-danger">
                        {errors.studentMobileNumber}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="studentState"
                      placeholder="Enter your State"
                      value={student.studentState}
                      onChange={handleInputChange}
                    />
                    {errors.studentState && (
                      <span className="text-danger">{errors.studentState}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="studentInstituteCode"
                      placeholder="Enter Institute code"
                      value={student.studentInstituteCode}
                      onChange={handleInputChange}
                    />
                    {errors.studentInstituteCode && (
                      <span className="text-danger">
                        {errors.studentInstituteCode}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="studentEmisNumber"
                      placeholder="Enter EMIS Number"
                      value={student.studentEmisNumber}
                      onChange={handleInputChange}
                    />
                    {errors.studentEmisNumber && (
                      <span className="text-danger">
                        {errors.studentEmisNumber}
                      </span>
                    )}
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="stud-termCon"
                      checked={termsAccepted}
                      onChange={handleTermsChange}
                    />
                    <label className="form-check-label" htmlFor="stud-termCon">
                      I accepted all terms and conditions
                    </label>
                    {errors.terms && (
                      <span className="text-danger">{errors.terms}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3 ">
                      Start Survey
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const studentAuthentication = async (
  studentData,
  setStudent,
  setTermsAccepted,
  navigate
) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/institution/getDropoutStudents"
    );
    const students = response.data;

    const studentExists = students.find(
      (student) =>
        student.dropoutStudentEMIS === studentData.studentEmisNumber &&
        student.dropoutStudentName === studentData.studentName &&
        student.dropoutStudentInstCode === studentData.studentInstituteCode
    );

    if (studentExists) {
      try {
        await axios.post(
          "http://localhost:8000/student/signup",
          studentData
        );
        navigate("/studentSurvey", {
          state: { studentInstituteState: studentData.studentState },
        });
      } catch (error) {
        alert(error.response.data.message)
      }
    } else {
      alert("The student is not registered as a dropout.");

      setStudent({
        studentName: "",
        studentEmail: "",
        studentMobileNumber: "",
        studentState: "",
        studentInstituteCode: "",
        studentEmisNumber: "",
      });
      setTermsAccepted(false);
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
};

export default StudentSignUp;
