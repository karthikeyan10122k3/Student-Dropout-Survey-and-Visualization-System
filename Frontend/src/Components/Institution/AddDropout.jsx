import "../../Assets/Styles/Institution/addDropout.css";
import { useState } from "react";

let dropOutStudentData = [];

const AddDropout = ({ setActiveComponent }) => {
  const [addDropout, setAddDropout] = useState({
    instStudentName: "",
    instStudentEMISNum: "",
    instStudentMNum: "",
    instStudentEmail: "",
    instStudentDropoutdate: "",
    instStudentCode: "",
    instStudentReason: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddDropout({ ...addDropout, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  const validateForm = () => {
    let newErrors = {};

    if (!addDropout.instStudentName.trim()) {
      newErrors.instStudentName = "Student name is required";
    }
    if (!addDropout.instStudentMNum.trim()) {
      newErrors.instStudentMNum = "Student mobile number is required";
    }
    if (!addDropout.instStudentEMISNum.trim()) {
      newErrors.instStudentEMISNum = "Student EMIS number is required";
    }
    if (!addDropout.instStudentDropoutdate.trim()) {
      newErrors.instStudentDropoutdate = "Dropout date is required";
    }
    if (!addDropout.instStudentReason.trim()) {
      newErrors.instStudentReason = "Reason for dropout is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dropOutStudentData.push(addDropout);
      console.log(dropOutStudentData);

      setAddDropout({
        instStudentName: "",
        instStudentEMISNum: "",
        instStudentMNum: "",
        instStudentEmail: "",
        instStudentCode: "",
        instStudentDropoutdate: "",
        instStudentReason: "",
      });
      setActiveComponent("dashBoard");
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={handleBackButton} className="btn btn-primary mb-3 px-4">
        Back
      </button>
      <h2 className="text-center mb-4">Add Dropped Out Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="instStudentName" className="form-label">
            Student Name: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="instStudentName"
            name="instStudentName"
            value={addDropout.instStudentName}
            onChange={handleChange}
            required
          />
          {errors.instStudentName && (
            <span className="text-danger">{errors.instStudentName}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentMNum" className="form-label">
            Student Mobile Number:{" "}
            <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="instStudentMNum"
            name="instStudentMNum"
            value={addDropout.instStudentMNum}
            onChange={handleChange}
            required
          />
          {errors.instStudentMNum && (
            <span className="text-danger">{errors.instStudentMNum}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentEmail" className="form-label">
            Student Email:{" "}
          </label>
          <input
            type="email"
            className="form-control"
            id="instStudentEmail"
            name="instStudentEmail"
            value={addDropout.instStudentEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentEMISNum" className="form-label">
            Student EMIS number: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="instStudentEMISNum"
            name="instStudentEMISNum"
            value={addDropout.instStudentEMISNum}
            onChange={handleChange}
            required
          />
          {errors.instStudentEMISNum && (
            <span className="text-danger">{errors.instStudentEMISNum}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentCode" className="form-label">
            Institution Code:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="instStudentCode"
            name="instStudentCode"
            value={addDropout.instStudentCode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentDropoutdate" className="form-label">
            Dropout Date: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="instStudentDropoutdate"
            name="instStudentDropoutdate"
            value={addDropout.instStudentDropoutdate}
            onChange={handleChange}
            required
          />
          {errors.instStudentDropoutdate && (
            <span className="text-danger">{errors.instStudentDropoutdate}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="instStudentReason" className="form-label">
            Reason for Dropout: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="instStudentReason"
            name="instStudentReason"
            value={addDropout.instStudentReason}
            onChange={handleChange}
            required
          />
          {errors.instStudentReason && (
            <span className="text-danger">{errors.instStudentReason}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export { dropOutStudentData };
export default AddDropout;
