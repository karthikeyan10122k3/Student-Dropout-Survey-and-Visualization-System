import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/Styles/Registration/login.css";
import axios from "axios";

export const InstitutionLoginComponent = ({ handleSignupClick }) => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(loginData)
      
      try {
        const response = await axios.post(
          "http://localhost:8000/institution/login",
          loginData
        );
        const logInAccepted = response.data.logInAccepted;

        if (logInAccepted) {
          navigate("/institution", {
            state: { InstEmail: loginData.institutionEmail },
          });
        } else {
          alert("Invalid credentials. Please try again.");
        }
        
      } catch (error) {
        console.error("Error fetching institution data:", error);
      }
    }
  };

  return (
    <div className="container smaller-container mt-2">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title text-blue font-weight-bolder text-primary text">
                Institution Login
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="institutionEmail"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    value={loginData.institutionEmail}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.institutionEmail && (
                    <span className="error">{errors.institutionEmail}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="institutionPassword"
                    className="form-control mb-3"
                    placeholder="Enter your password"
                    value={loginData.institutionPassword}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.institutionPassword && (
                    <span className="error">{errors.institutionPassword}</span>
                  )}
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    id="log-Check"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    className="form-check-input"
                  />
                  <label
                    htmlFor="logCheck"
                    className="log-text form-check-label mb-2"
                  >
                    Remember me
                  </label>
                </div>
                <div className="form-group mb-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div className="log-login-signup mb-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export const GovernmentLoginComponent = ({ handleSignupClick }) => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/government/login",
          loginData
        );
        const logInAccepted = response.data.logInAccepted;
        console.log(logInAccepted);

        if (logInAccepted) {
          navigate("/government", {
            state: { govEmail: loginData.governmentEmail },
          });
        } else {
          alert("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching government user data:", error);
      }
    }
  };
  return (
    <div className="container smaller-container mt-2">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title text-blue font-weight-bolder text-primary text">
                Government Login
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="governmentEmail"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    value={loginData.governmentEmail}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.governmentEmail && (
                    <span className="error">{errors.governmentEmail}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="governmentPassword"
                    className="form-control mb-3"
                    placeholder="Enter your password"
                    value={loginData.governmentPassword}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.governmentPassword && (
                    <span className="error">{errors.governmentPassword}</span>
                  )}
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    id="log-Check"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    className="form-check-input"
                  />
                  <label
                    htmlFor="logCheck"
                    className="log-text form-check-label mb-2"
                  >
                    Remember me
                  </label>
                </div>
                <div className="form-group mb-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div className="log-login-signup mb-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};
