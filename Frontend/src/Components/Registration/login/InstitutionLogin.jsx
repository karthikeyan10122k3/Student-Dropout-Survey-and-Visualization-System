import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../Assets/Styles/Registration/login.css";
import axios from "axios";

export const InstitutionLogin = () => {
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
    let newErrors = {};
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/institution/login",
          loginData
        );
        const user = response.data;

        if (user.email) {
          navigate("/institution", {
            state: { InstEmail: loginData.institutionEmail, accessToken:user.accessToken },
          });
        } else {
          newErrors.validUser = user.message;
          setErrors(newErrors);
        }
      } catch (error) {
        console.error("Error fetching institution data:", error);
      }
    }
  };

  return (
    <div className="container smaller-container mt-2 ">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card border-primary">
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title text-blue font-weight-bolder text-primary text">
                  Institution Login
                </h5>
              </div>
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
                <div className="text-center text-danger mb-3">
                  {errors.validUser && (
                    <span className="error">{errors.validUser}</span>
                  )}
                </div>
                <div className="form-group mb-2 text-center">
                  <button type="submit" className="btn btn-primary me-3">
                    Login
                  </button>
                  <Link to={"/"} className="btn btn-primary " >
                    Home
                  </Link>
                </div>
              </form>
              <div className="log-login-signup mb-2 text-center">
                <span className="log-text">
                  Not a member?
                  <Link
                    to="/register"
                    state={{ componentToSignUp: "institution" }}
                    className="log-text log-signup-link ms-2"
                  >
                    Signup Now
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
