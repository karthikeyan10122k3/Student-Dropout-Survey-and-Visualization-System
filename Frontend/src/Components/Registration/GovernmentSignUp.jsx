import { useState } from "react";
import { GovernmentLoginComponent } from "./Login";
import "../../Assets/Styles/Registration/institutionSignUp.css"; 
import axios from "axios";

const GovernmentSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [government, setGovernment] = useState({
    governmentState: "",
    governmentEmail: "",
    governmentPassword: "",
    governmentConfirmPassword: "",
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
    setGovernment((prevGovernment) => ({
      ...prevGovernment,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!government.governmentState.trim()) {
      newErrors.governmentState = "State is required";
    }
    if (!government.governmentEmail.trim()) {
      newErrors.governmentEmail = "Email is required";
    }
    if (!government.governmentPassword.trim()) {
      newErrors.governmentPassword = "Password is required";
    }
    if (
      government.governmentPassword !== government.governmentConfirmPassword
    ) {
      newErrors.governmentConfirmPassword = "Passwords do not match";
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
      let governmentData = {
        governmentState: government.governmentState,
        governmentEmail: government.governmentEmail,
        governmentPassword: government.governmentPassword,
      };

      govPostRequest(governmentData);

      setGovernment({
        governmentState: "",
        governmentEmail: "",
        governmentPassword: "",
        governmentConfirmPassword: "",
      });

      setTermsAccepted(false);
      setShowLogin(true);
    }
  };
  return (
    <>
      {!showLogin && (
        <div className="container smaller-container mt-2">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card border-primary">
                <div className="card-body">
                  <h5 className="card-title text-blue font-weight-bolder text-primary text">
                    State Government Signup
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="governmentState"
                        placeholder="Enter State"
                        value={government.governmentState}
                        onChange={handleInputChange}
                      />
                      {errors.governmentState && (
                        <span className="text-danger">
                          {errors.governmentState}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="governmentEmail"
                        placeholder="Enter Email"
                        value={government.governmentEmail}
                        onChange={handleInputChange}
                      />
                      {errors.governmentEmail && (
                        <span className="text-danger">
                          {errors.governmentEmail}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-3"
                        name="governmentPassword"
                        placeholder="Create a password"
                        value={government.governmentPassword}
                        onChange={handleInputChange}
                      />
                      {errors.governmentPassword && (
                        <span className="text-danger">
                          {errors.governmentPassword}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-3"
                        name="governmentConfirmPassword"
                        placeholder="Confirm password"
                        value={government.governmentConfirmPassword}
                        onChange={handleInputChange}
                      />
                      {errors.governmentConfirmPassword && (
                        <span className="text-danger">
                          {errors.governmentConfirmPassword}
                        </span>
                      )}
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="gov-termCon"
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                      />
                      <label className="form-check-label" htmlFor="gov-termCon">
                        I accept all terms and conditions
                      </label>
                      {errors.terms && (
                        <span className="text-danger">{errors.terms}</span>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary my-2">
                      Signup
                    </button>
                    <div className="inst-login-signup">
                      <div className="inst-text">Already a Member?</div>
                      <div className="inst-text inst-signup-link">
                        <a onClick={handleLoginClick} href="#">
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
        <GovernmentLoginComponent handleSignupClick={handleSignupClick} />
      )}
    </>
  );
};

const govPostRequest = async (governmentData) => {
  try {
    console.log(governmentData);
    await axios.post("http://localhost:8000/newGovUser/signup", governmentData);
    console.log("Government User added successfully");
  } catch (error) {
    console.error("Error adding Government User:", error);
  }
};

export default GovernmentSignUp;
