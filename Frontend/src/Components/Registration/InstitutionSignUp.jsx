import { useState } from "react";
import { InstitutionLoginComponent } from "./Login";
import "../../Assets/Styles/Registration/institutionSignUp.css";
import axios from "axios";

const InstitutionSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [institution, setInstitution] = useState({
    institutionName: "",
    institutionState: "",
    institutionEmail: "",
    institutionCode: "",
    institutionPassword: "",
    institutionconfirmPassword: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstitution((prevInstitution) => ({
      ...prevInstitution,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!institution.institutionName.trim()) {
      newErrors.institutionName = "Institution name is required";
    }
    if (!institution.institutionState.trim()) {
      newErrors.institutionState = "State is required";
    }
    if (!institution.institutionEmail.trim()) {
      newErrors.institutionEmail = "Email is required";
    }
    if (!institution.institutionCode.trim()) {
      newErrors.institutionCode = "Institution Code is required";
    }
    if (!institution.institutionPassword.trim()) {
      newErrors.institutionPassword = "Password is required";
    } else if (institution.institutionPassword.trim().length < 6) {
      newErrors.institutionPassword =
        "Password must be at least 6 characters long";
    }
    if (
      institution.institutionPassword !== institution.institutionconfirmPassword
    ) {
      newErrors.institutionconfirmPassword = "Passwords do not match";
    }
    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const institutionData = {
        institutionCode: institution.institutionCode,
        institutionName: institution.institutionName,
        institutionState: institution.institutionState,
        institutionEmail: institution.institutionEmail,
        institutionPassword: institution.institutionPassword,
      };

      InstitutionPostRequest(institutionData);

      setInstitution({
        institutionName: "",
        institutionState: "",
        institutionEmail: "",
        institutionCode: "",
        institutionPassword: "",
        institutionconfirmPassword: "",
      });
      setTermsAccepted(false);

      setShowLogin(true);
    }
  };

  return (
    <>
      {!showLogin && (
        <div className="container smaller-container mt-2 mb-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card border-primary">
                <div className="card-body">
                  <h5 className="card-title text-blue font-weight-bolder text-primary text">
                    Institution Sign Up
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="institutionName"
                        placeholder="Enter Institution name"
                        value={institution.institutionName}
                        onChange={handleInputChange}
                      />
                      {errors.institutionName && (
                        <span className="text-danger">
                          {errors.institutionName}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="institutionState"
                        placeholder="Enter your State"
                        value={institution.institutionState}
                        onChange={handleInputChange}
                      />
                      {errors.institutionState && (
                        <span className="text-danger">
                          {errors.institutionState}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="institutionEmail"
                        placeholder="Enter Institution email"
                        value={institution.institutionEmail}
                        onChange={handleInputChange}
                      />
                      {errors.institutionEmail && (
                        <span className="text-danger">
                          {errors.institutionEmail}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="institutionCode"
                        placeholder="Enter Institution Code"
                        value={institution.institutionCode}
                        onChange={handleInputChange}
                      />
                      {errors.institutionCode && (
                        <span className="text-danger">
                          {errors.institutionCode}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-3"
                        name="institutionPassword"
                        placeholder="Create a password"
                        value={institution.institutionPassword}
                        onChange={handleInputChange}
                      />
                      {errors.institutionPassword && (
                        <span className="text-danger">
                          {errors.institutionPassword}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-3"
                        name="institutionconfirmPassword"
                        placeholder="Confirm password"
                        value={institution.institutionconfirmPassword}
                        onChange={handleInputChange}
                      />
                      {errors.institutionconfirmPassword && (
                        <span className="text-danger">
                          {errors.institutionconfirmPassword}
                        </span>
                      )}
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="inst-termCon"
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inst-termCon"
                      >
                        I accepted all terms and conditions
                      </label>
                      {errors.terms && (
                        <span className="text-danger">{errors.terms}</span>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary my-2">
                      Sign Up
                    </button>
                    <div className="inst-login-signup">
                      <div className="inst-text">Already a Member?</div>
                      <div className="inst-text inst-signup-link">
                        <a href="#" onClick={handleLoginClick}>
                          Login Now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showLogin && (
        <InstitutionLoginComponent handleSignupClick={handleSignupClick} />
      )}
    </>
  );
};

const InstitutionPostRequest = async (institutionData) => {
  try {
    await axios.post(
      "http://localhost:8000/newInstitutionUser/signup",
      institutionData
    );
    console.log("Institution User added successfully");
  } catch (error) {
    console.error("Error adding Institution User:", error);
  }
};

export default InstitutionSignUp;
