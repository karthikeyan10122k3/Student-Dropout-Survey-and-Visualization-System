import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../Assets/Styles/Student/studentSurveyPage.css";

const StudentSurvey = () => {
  return (
    <div className="container mt-5">
      <h2>Students's Dropout Survey Form</h2>
      <form id="institutionForm">
        <div className="mb-3">
          <label htmlFor="StudentName" className="form-label">
            Student Name: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="StudentName"
            name="StudentName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="StudentMNum" className="form-label">
            Student Mobile Number: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="StudentMNum"
            name="StudentMNum"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="StudentDOB" className="form-label">
            Student DOB: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="StudentDOB"
            name="StudentDOB"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="StudentReligion" className="form-label">
            Student Religion: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="StudentReligion"
            name="StudentReligion"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="StudentCaste" className="form-label">
            Student Caste(optional):
          </label>
          <input
            type="text"
            className="form-control"
            id="StudentCaste"
            name="StudentCaste"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Reason" className="form-label">
            Reason for Dropout:<span className="text-danger fw-bold">*</span>
          </label>
          <textarea
            className="form-control"
            id="Reason"
            name="Reason"
            required
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentSurvey;
