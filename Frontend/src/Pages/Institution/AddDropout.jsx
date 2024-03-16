import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../Assets/Styles/Student/studentSurveyPage.css';
import { Link } from 'react-router-dom';


const AddDropout = () => {
  return (
    <div className="container mt-5">
      <h2>Institution Dropout Survey Form</h2>
      <form id="institutionForm">
        <div className="mb-3">
          <label htmlFor="instStudentName" className="form-label">Student Name: <span className="text-danger fw-bold">*</span></label>
          <input type="text" className="form-control" id="instStudentName" name="instStudentName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentMNum" className="form-label">Student Mobile Number: <span className="text-danger fw-bold">*</span></label>
          <input type="text" className="form-control" id="instStudentMNum" name="instStudentMNum" required />
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentEmail" className="form-label">Student Email: </label>
          <input type="email" className="form-control" id="instStudentEmail" name="instStudentEmail"  />
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentEMISNum" className="form-label">Student EMIS number: <span className="text-danger fw-bold">*</span></label>
          <input type="text" className="form-control" id="instStudentEMISNum" name="instStudentEMISNum" required />
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentDropoutdate" className="form-label">Dropout Date: <span className="text-danger fw-bold">*</span></label>
          <input type="date" className="form-control" id="instStudentDropoutdate" name="instStudentDropoutdate" required />
        </div>
        <div className="mb-3">
          <label htmlFor="instReason" className="form-label">Reason for Dropout: <span className="text-danger fw-bold">*</span></label>
          <textarea className="form-control" id="instReason" name="instReason" required defaultValue={""} />
        </div>
        <Link to="/institution"><button type="submit" className="btn btn-primary">Submit</button></Link>
      </form>
    </div>
  );
}

export default AddDropout;
