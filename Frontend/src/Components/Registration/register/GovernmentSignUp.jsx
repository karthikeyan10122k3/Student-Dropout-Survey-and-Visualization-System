import { useState } from "react";

import "../../../Assets/Styles/Registration/govSignUp.css";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let governmentData = {
        governmentState: government.governmentState,
        governmentEmail: government.governmentEmail,
        governmentPassword: government.governmentPassword,
      };

      try {
        const response = await axios.post(
          "http://localhost:8000/government/signup",
          governmentData
        );
        console.log("Government User added successfully", response.data);
      } catch (error) {
        alert(error.response.data.message);
      }

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
        <div className="container smaller-container mt-2 ">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card border-primary">
                <div className="card-body">
                  <div className="text-center">
                  <h5 className="card-title text-blue font-weight-bolder text-primary text">
                    Government Signup
                  </h5>
                  </div>
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
                      <label
                        className="form-check-label"
                        htmlFor="gov-termCon"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        I accept all terms and conditions
                      </label>
                      {errors.terms && (
                        <span className="text-danger">{errors.terms}</span>
                      )}
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-primary my-2">
                      Signup
                    </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <div className="inst-text">Already a Member?</div>
                      <div className="inst-text inst-signup-link">
                        <Link to="/login" state={{ componentToLogin: "government"}} >
                          Login Now
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">
                Terms and Conditions
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Welcome to Student Dropout Rate Analysis! Before you sign up,
                please read these terms and conditions carefully. By creating an
                account on our website, you agree to abide by these terms.
              </p>
              <ol>
                <li>
                  <strong>Registration Information:</strong> When signing up for
                  an account on Student Dropout Rate Analysis, you agree to
                  provide accurate and complete information about yourself as
                  prompted by the registration form. You also agree to maintain
                  and promptly update your registration information to ensure it
                  remains accurate and complete.
                </li>
                <li>
                  <strong>Account Security:</strong> You are responsible for
                  maintaining the confidentiality of your account credentials,
                  including your username and password. You agree not to share
                  your account credentials with anyone else or allow anyone else
                  to access your account. You are solely responsible for all
                  activities that occur under your account.
                </li>
                <li>
                  <strong>User Conduct:</strong> You agree to use Student
                  Dropout Rate Analysis only for lawful purposes and in a manner
                  consistent with all applicable laws and regulations. You agree
                  not to use the website in any way that could harm the website,
                  its users, or its reputation.
                </li>
                <li>
                  <strong>Intellectual Property:</strong> All content on Student
                  Dropout Rate Analysis, including text, graphics, logos,
                  images, and software, is the property of Student Dropout Rate
                  Team or its licensors and is protected by intellectual
                  property laws. You agree not to reproduce, distribute, modify,
                  or create derivative works based on any content from the
                  website without prior written consent.
                </li>
                <li>
                  <strong>Privacy:</strong> Your privacy is important to us.
                  Please review our Privacy Policy to understand how we collect,
                  use, and disclose your personal information.
                </li>
                <li>
                  <strong>Termination:</strong> Student Dropout Rate Team
                  reserves the right to terminate or suspend your account at any
                  time and for any reason without prior notice. In the event of
                  termination or suspension, you will no longer have access to
                  your account, and any content associated with your account may
                  be deleted.
                </li>
                <li>
                  <strong>Changes to Terms:</strong> Student Dropout Rate Team
                  reserves the right to modify or update these terms and
                  conditions at any time without prior notice. Any changes will
                  be effective immediately upon posting to the website. Your
                  continued use of the website after any such changes
                  constitutes your acceptance of the revised terms and
                  conditions.
                </li>
              </ol>
              <p>
                By clicking "Close" button, you acknowledge that you have read,
                understood, and agree to be bound by these terms and conditions.
                If you do not agree to these terms, please do not proceed with
                the registration process.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const govPostRequest = async (governmentData) => {
  try {
    await axios.post("http://localhost:8000/government/signup", governmentData);
    console.log("Government User added successfully");
  } catch (error) {
    console.error("Error adding Government User:", error);
  }
};

export default GovernmentSignUp;
