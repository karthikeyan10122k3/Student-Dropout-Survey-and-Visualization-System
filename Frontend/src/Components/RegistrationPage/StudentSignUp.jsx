import "../../Assets/Styles/RegistrationPage/studentSignUp.css"

const StudentSignUp = () => {
  return (
    <div className="stud-form stud-signup">
      <p>Student Sign-Up</p>
      <form action="/student-SignUp">
        <div className="stud-input-field">
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="stud-input-field">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="stud-input-field">
          <input type="text" placeholder="Enter mobile number" required />
        </div>
        <div className="stud-input-field gov-input">
          <input type="text" placeholder="Enter your State" required />
        </div>
        <div className="stud-input-field">
          <input type="text" placeholder="Enter Institute name" required />
        </div>
        <div className="stud-input-field">
          <input type="text" placeholder="Enter Institute code" required />
        </div>
        <div className="stud-input-field">
          <input type="text" placeholder="Enter EMIS Number" required />
        </div>
        <div className="stud-checkbox-text">
          <div className="stud-checkbox-content">
            <input type="checkbox" id="stud-termCon" />
            <label htmlFor="termCon" className="stud-text">
              I accepted all terms and conditions
            </label>
          </div>
        </div>
        <div className="stud-input-field stud-button">
          <a href="dash.html">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default StudentSignUp;
