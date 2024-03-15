import "../../Assets/Styles/Registration/institutionSignUp.css";

import { useState } from "react";
import { InstitutionLoginComponent } from "./Login";

const InstitutionSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <>
      {!showLogin && (
        <div className="inst-form inst-signup">
          <p>Institution Management signin</p>
          <form action="#">
            <div className="inst-input-field">
              <input
                type="text"
                placeholder="Enter Institution name"
                required
              />
            </div>
            <div className="inst-input-field gov-input">
              <input type="text" placeholder="Enter your State" required />
            </div>
            <div className="inst-input-field">
              <input
                type="text"
                placeholder="Enter Institution email"
                required
              />
            </div>
            <div className="inst-input-field">
              <input
                type="text"
                placeholder="Enter Institution Code"
                required
              />
            </div>
            <div className="inst-input-field">
              <input
                type="password"
                className="inst-password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="inst-input-field">
              <input
                type="password"
                className="inst-password"
                placeholder="Confirm a password"
                required
              />
            </div>
            <div className="inst-checkbox-text">
              <div className="inst-checkbox-content">
                <input type="checkbox" id="inst-termCon" />
                <label htmlFor="termCon" className="inst-text">
                  I accepted all terms and conditions
                </label>
              </div>
            </div>
            <div className="inst-input-field inst-button">
              <a href="dash.html">Signup</a>
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
      {showLogin && <InstitutionLoginComponent />}
    </>
  );
};

export default InstitutionSignUp;
