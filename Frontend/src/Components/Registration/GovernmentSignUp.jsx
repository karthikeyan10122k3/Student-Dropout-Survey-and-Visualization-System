import "../../Assets/Styles/Registration/govSignUp.css"

import { useState } from "react";
import {GovernmentLoginComponent} from "./Login";


const GovernmentSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  return (
    <>
      {!showLogin && (
        <div className="gov-form gov-signup">
          <p>Government Authority signin</p>
          <form action="#">
            <div className="gov-input-field gov-input">
              <input type="text" placeholder="Enter your State" required />
            </div>
            <div className="gov-input-field gov-input">
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="gov-input-field gov-input">
              <input
                type="password"
                className="gov-password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="gov-input-field gov-input">
              <input
                type="password"
                className="gov-password"
                placeholder="Confirm a password"
                required
              />
            </div>
            <div className="gov-input-field gov-button">
              <a href="#">Signup</a>
            </div>
            <div className="gov-login-signup">
              <div className="gov-text">Already a Member?</div>
              <div className="gov-text gov-signup-link">
                <a onClick={handleLoginClick} href="#">
                  Login Now
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
      {showLogin && <GovernmentLoginComponent />}
    </>
  );
};

export default GovernmentSignUp;
