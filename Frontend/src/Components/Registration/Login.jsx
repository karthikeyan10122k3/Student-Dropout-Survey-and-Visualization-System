import { useState } from "react";
import "../../Assets/Styles/Registration/login.css";

export const InstitutionLoginComponent = ({ handleSignupClick }) => {
  const [loginData, setLoginData] = useState({
    institutionEmail: "",
    institutionPassword: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!loginData.institutionEmail.trim()) {
      newErrors.institutionEmail = "Email is required";
    }
    if (!loginData.institutionPassword.trim()) {
      newErrors.institutionPassword = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      window.location.href = "/institution"
    }
  };

  return (
    <div className="log-form log-signup">
      <span className="log-title">Institution Login</span>
      <form onSubmit={handleSubmit}>
        <div className="log-input-field">
          <input
            type="text"
            name="institutionEmail"
            placeholder="Enter your email"
            value={loginData.institutionEmail}
            onChange={handleInputChange}
            required
          />
          {errors.institutionEmail && (
            <span className="error">{errors.institutionEmail}</span>
          )}
        </div>
        <div className="log-input-field">
          <input
            type="password"
            name="institutionPassword"
            className="log-password"
            placeholder="Enter your password"
            value={loginData.institutionPassword}
            onChange={handleInputChange}
            required
          />
          {errors.institutionPassword && (
            <span className="error">{errors.institutionPassword}</span>
          )}
        </div>
        <div className="log-checkbox-text">
          <div className="log-checkbox-content">
            <input
              type="checkbox"
              id="log-Check"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="logCheck" className="log-text">
              Remember me
            </label>
          </div>
          <div className="log-forgot-password">
            <a href="#" className="log-text">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="log-input-field button">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="log-login-signup">
        <span className="log-text">
          Not a member?
          <a
            href="#"
            className="log-text log-signup-link"
            onClick={handleSignupClick}
          >
            Signup Now
          </a>
        </span>
      </div>
    </div>
  );
};


export const GovernmentLoginComponent = ({ handleSignupClick }) => {
  const [loginData, setLoginData] = useState({
    governmentEmail: "",
    governmentPassword: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!loginData.governmentEmail.trim()) {
      newErrors.governmentEmail = "Email is required";
    }
    if (!loginData.governmentPassword.trim()) {
      newErrors.governmentPassword = "Password is required";
    }
    

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      window.location.href = "/government"
    }
  };

  return (
    <div className="log-form log-signup">
      <span className="log-title">Government Login</span>
      <form onSubmit={handleSubmit}>
        <div className="log-input-field">
          <input
            type="text"
            name="governmentEmail"
            placeholder="Enter your email"
            value={loginData.governmentEmail}
            onChange={handleInputChange}
            required
          />
          {errors.governmentEmail && (
            <span className="error">{errors.governmentEmail}</span>
          )}
        </div>
        <div className="log-input-field">
          <input
            type="password"
            name="governmentPassword"
            className="log-password"
            placeholder="Enter your password"
            value={loginData.governmentPassword}
            onChange={handleInputChange}
            required
          />
          {errors.governmentPassword && (
            <span className="error">{errors.governmentPassword}</span>
          )}
        </div>
        <div className="log-checkbox-text">
          <div className="log-checkbox-content">
            <input
              type="checkbox"
              id="log-Check"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="logCheck" className="log-text">
              Remember me
            </label>
          </div>
          <div className="log-forgot-password">
            <a href="#" className="log-text">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="log-input-field button">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="log-login-signup">
        <span className="log-text">
          Not a member?
          <a
            className="log-text log-signup-link"
            onClick={handleSignupClick}
          >
            Signup Now
          </a>
        </span>
      </div>
    </div>
  );
};

