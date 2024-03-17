import { useState } from "react";
import { InstitutionLoginComponent } from "./Login";
import "../../Assets/Styles/Registration/institutionSignUp.css";

let institutionUsers = [];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const institutionData = {
        institutionCode: institution.institutionCode,
        institutionName: institution.institutionName,
        institutionState: institution.institutionState,
        institutionEmail: institution.institutionEmail,
        institutionPassword: institution.institutionPassword,
      };

      institutionUsers.push(institutionData);

      console.log(institutionUsers);

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
        <div className="inst-form inst-signup">
          <p>Institution Management signin</p>
          <form onSubmit={handleSubmit}>
            <div className="inst-input-field">
              <input
                type="text"
                name="institutionName"
                placeholder="Enter Institution name"
                value={institution.institutionName}
                onChange={handleInputChange}
              />
              {errors.institutionName && (
                <span className="error">{errors.institutionName}</span>
              )}
            </div>
            <div className="inst-input-field">
              <input
                type="text"
                name="institutionState"
                placeholder="Enter your State"
                value={institution.institutionState}
                onChange={handleInputChange}
              />
              {errors.institutionState && (
                <span className="error">{errors.institutionState}</span>
              )}
            </div>
            <div className="inst-input-field">
              <input
                type="text"
                name="institutionEmail"
                placeholder="Enter Institution email"
                value={institution.institutionEmail}
                onChange={handleInputChange}
              />
              {errors.institutionEmail && (
                <span className="error">{errors.institutionEmail}</span>
              )}
            </div>
            <div className="inst-input-field">
              <input
                type="text"
                name="institutionCode"
                placeholder="Enter Institution Code"
                value={institution.institutionCode}
                onChange={handleInputChange}
              />
              {errors.institutionCode && (
                <span className="error">{errors.institutionCode}</span>
              )}
            </div>
            <div className="inst-input-field">
              <input
                type="password"
                name="institutionPassword"
                className="inst-password"
                placeholder="Create a password"
                value={institution.institutionPassword}
                onChange={handleInputChange}
              />
              {errors.institutionPassword && (
                <span className="error">{errors.institutionPassword}</span>
              )}
            </div>
            <div className="inst-input-field">
              <input
                type="password"
                name="institutionconfirmPassword"
                className="inst-password"
                placeholder="Confirm password"
                value={institution.institutionconfirmPassword}
                onChange={handleInputChange}
              />
              {errors.institutionconfirmPassword && (
                <span className="error">
                  {errors.institutionconfirmPassword}
                </span>
              )}
            </div>
            <div className="inst-checkbox-text">
              <div className="inst-checkbox-content">
                <input
                  type="checkbox"
                  id="inst-termCon"
                  checked={termsAccepted}
                  onChange={handleTermsChange}
                />
                <label htmlFor="inst-termCon" className="inst-text">
                  I accepted all terms and conditions
                </label>
              </div>
              {errors.terms && <span className="error">{errors.terms}</span>}
            </div>
            <div className="inst-input-field inst-button">
              <button type="submit">Signup</button>
            </div>
            <div className="inst-login-signup">
              <div className="inst-text">Already a Member?</div>
              <div className="inst-text inst-signup-link">
                <a onClick={handleLoginClick}>Login Now</a>
              </div>
            </div>
          </form>
        </div>
      )}
      {showLogin && (
        <InstitutionLoginComponent handleSignupClick={handleSignupClick} />
      )}
    </>
  );
};

export { institutionUsers };
export default InstitutionSignUp;
