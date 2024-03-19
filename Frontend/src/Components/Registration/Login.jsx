import { useState } from "react";
import "../../Assets/Styles/Registration/login.css";
import axios from 'axios';

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
      handleAuthenticationInstitution(loginData)
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

const handleAuthenticationInstitution = async (loginData) => {
  try {
    const response = await axios.get('http://localhost:8000/getInstitutionUser/login');
    const institutions = response.data;
    console.log(institutions);
    
    const loggedInInstitution = institutions.find(institution => institution.institutionEmail === loginData.institutionEmail && institution.institutionPassword === loginData.institutionPassword);
    console.log(loggedInInstitution);

    if (loggedInInstitution) {
      alert('Login successful!');

      window.location.href = "/institution";
    } else {
      alert('Invalid credentials. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching institution data:', error);
  }
}

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
      handleAuthenticationGovernment(loginData)
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
            href="#"
          >
            Signup Now
          </a>
        </span>
      </div>
    </div>
  );
};

const handleAuthenticationGovernment = async (loginData) => {
  try {
    const response = await axios.get('http://localhost:8000/getGovernmentUser/login');
    const governments = response.data;
    
    const loggedInUser = governments.find(user => user.governmentEmail === loginData.governmentEmail && user.governmentPassword === loginData.governmentPassword);

    if (loggedInUser) {
      console.log('Login successful!');

      window.location.href = "/government";
    } else {
      alert('Invalid credentials. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching government user data:', error);
  }
}