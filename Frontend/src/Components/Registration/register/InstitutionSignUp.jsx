import { useState } from "react";
import institutionSignUpStyle from "../../../Assets/Styles/Registration/institutionSignUp.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const InstitutionSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [institution, setInstitution] = useState({
    institutionName: "",
    institutionState: "",
    institutionEmail: "",
    institutionCode: "",
    institutionPassword: "",
    institutionWebsite: "",
    institutionconfirmPassword: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});


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
        institutionWebsite: institution.institutionWebsite,
      };

      InstitutionPostRequest(institutionData);

      setInstitution({
        institutionName: "",
        institutionState: "",
        institutionEmail: "",
        institutionCode: "",
        institutionPassword: "",
        institutionWebsite: "",
        institutionconfirmPassword: "",
      });
      setTermsAccepted(false);

      setShowLogin(true);
    }
  };

  return (
    <>
        <div className={`container smaller-container mt-2 mb-5 `}>
          <div className={`row `}>
            <div className="col-md-8 offset-md-2">
              <div className={`border border-primary rounded p-3 bg-light`}>
                <div className="text-center">
                <h5 className="text-primary text">Institution Sign Up</h5>
                </div>
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
                      type="text"
                      className="form-control mb-3"
                      name="institutionWebsite"
                      placeholder="Enter Institution Website URL"
                      value={institution.institutionWebsite}
                      onChange={handleInputChange}
                    />
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
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      I accepted all terms and conditions
                    </label>
                    <br />
                    {errors.terms && (
                      <span className="text-danger">{errors.terms}</span>
                    )}
                  </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-primary my-2 ">
                    Sign Up
                  </button>
                  </div>
                  <div className={`d-flex align-items-center justify-content-center  gap-2`}>
                    <div className="inst-text">Already a Member?</div>
                    <div className="inst-text inst-signup-link">
                    <Link to="/login" state={{ componentToLogin: "institution"}} >
                          Login Now
                        </Link>
                    </div>
                  </div>
                </form>
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

const InstitutionPostRequest = async (institutionData) => {
  try {
    await axios.post(
      "http://localhost:8000/institution/signup",
      institutionData
    );
    console.log("Institution User added successfully");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export default InstitutionSignUp;
