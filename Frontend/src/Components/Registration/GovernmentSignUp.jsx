import { useState } from "react";
import { GovernmentLoginComponent } from "./Login";
import '../../Assets/Styles/Registration/institutionSignUp.css';
import axios from 'axios';


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
    // else if (government.governmentPassword.trim().length < 6) {
    //   newErrors.governmentPassword =
    //     "Password must be at least 6 characters long";
    // }
    if (government.governmentPassword !== government.governmentConfirmPassword) {
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

      govPostRequest(governmentData)

      setGovernment({
        governmentState: "",
        governmentEmail: "",
        governmentPassword: "",
        governmentConfirmPassword: "",
      })

      setTermsAccepted(false)
      setShowLogin(true);
    }
  };
  return (
    <>
      {!showLogin && (
        <div className="inst-form inst-signup">
          <p>Government Authority Signup</p>
          <form onSubmit={handleSubmit} >
            <div className="inst-input-field">
              <input
                type="text"
                name="governmentState"
                placeholder="Enter State"
                value={government.governmentState}
                onChange={handleInputChange}
              />
              {errors.governmentState && <span className="error">{errors.governmentState}</span>}
            </div>
            <div className="inst-input-field">
              <input
                type="text"
                name="governmentEmail"
                placeholder="Enter Email"
                value={government.governmentEmail}
                onChange={handleInputChange}
              />
              {errors.governmentEmail && <span className="error">{errors.governmentEmail}</span>}
            </div>
            <div className="inst-input-field">
              <input
                type="password"
                name="governmentPassword"
                placeholder="Create a password"
                value={government.governmentPassword}
                onChange={handleInputChange}
              />
              {errors.governmentPassword && <span className="error">{errors.governmentPassword}</span>}
            </div>
            <div className="inst-input-field">
              <input
                type="password"
                name="governmentConfirmPassword"
                placeholder="Confirm password"
                value={government.governmentConfirmPassword}
                onChange={handleInputChange}
              />
              {errors.governmentConfirmPassword && <span className="error">{errors.governmentConfirmPassword}</span>}
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
                  I accept all terms and conditions
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
                <a onClick={handleLoginClick} href="#">
                  Login Now
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
      {showLogin && (
        <GovernmentLoginComponent handleSignupClick={handleSignupClick}  />
      )}
    </>
  );
};

const govPostRequest = async(governmentData) =>{
  try {
    console.log(governmentData);
    await axios.post('http://localhost:8000/newGovUser/signup', governmentData );
    console.log('Government User added successfully');
  } catch (error) {
    console.error('Error adding Government User:', error);
  }
}

export default GovernmentSignUp;
