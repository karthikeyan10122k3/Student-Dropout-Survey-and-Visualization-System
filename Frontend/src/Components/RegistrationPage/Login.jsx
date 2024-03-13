import "../../Assets/Styles/RegistrationPage/login.css";

const LoginComponent = ({ handleSignupClick }) => {
  return (
    <div className="log-form log-signup">
      <span className="log-title">Login</span>
      <form action="#">
        <div className="log-input-field">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="log-input-field">
          <input
            type="password"
            className="log-password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="log-checkbox-text">
          <div className="log-checkbox-content">
            <input type="checkbox" id="log-Check" />
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
          <input type="button" value="Login" />
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

export default LoginComponent;
