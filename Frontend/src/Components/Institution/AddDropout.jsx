import "../../Assets/Styles/Institution/addDropout.css";
import { useState } from "react";
import axios from 'axios';


const AddDropout = ({ setActiveComponent }) => {
  const [addDropout, setAddDropout] = useState({
    dropoutStudentEMIS: "",
    dropoutStudentName: "",
    dropoutStudentMobile: "",
    dropoutStudentEmail: "",
    dropoutStudentDate: "",
    dropoutStudentInstCode: "",
    dropoutStudentReason: "",
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

    if (!addDropout.dropoutStudentName.trim()) {
      newErrors.dropoutStudentName = "Student name is required";
    }
    if (!addDropout.dropoutStudentMobile.trim()) {
      newErrors.dropoutStudentMobile = "Student mobile number is required";
    }
    if (!addDropout.dropoutStudentEMIS.trim()) {
      newErrors.dropoutStudentEMIS = "Student EMIS number is required";
    }
    if (!addDropout.dropoutStudentDate.trim()) {
      newErrors.dropoutStudentDate = "Dropout date is required";
    }
    if (!addDropout.dropoutStudentReason.trim()) {
      newErrors.dropoutStudentReason = "Reason for dropout is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {

      addDropoutPostRequest(addDropout)

      setAddDropout({
        dropoutStudentEMIS:"",
        dropoutStudentName: "",
        dropoutStudentMobile:"" ,
        dropoutStudentEmail: "",
        dropoutStudentInstCode: "",
        dropoutStudentDate: "",
        dropoutStudentReason: "",
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
          <label htmlFor="dropoutStudentName" className="form-label">
            Student Name: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="dropoutStudentName"
            name="dropoutStudentName"
            value={addDropout.dropoutStudentName}
            onChange={handleChange}
            required
          />
          {errors.dropoutStudentName && (
            <span className="text-danger">{errors.dropoutStudentName}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dropoutStudentMobile" className="form-label">
            Student Mobile Number:{" "}
            <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="dropoutStudentMobile"
            name="dropoutStudentMobile"
            value={addDropout.dropoutStudentMobile}
            onChange={handleChange}
            required
          />
          {errors.dropoutStudentMobile && (
            <span className="text-danger">{errors.dropoutStudentMobile}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dropoutStudentEmail" className="form-label">
            Student Email:{" "}
          </label>
          <input
            type="email"
            className="form-control"
            id="dropoutStudentEmail"
            name="dropoutStudentEmail"
            value={addDropout.dropoutStudentEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dropoutStudentEMIS" className="form-label">
            Student EMIS number: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="dropoutStudentEMIS"
            name="dropoutStudentEMIS"
            value={addDropout.dropoutStudentEMIS}
            onChange={handleChange}
            required
          />
          {errors.dropoutStudentEMIS && (
            <span className="text-danger">{errors.dropoutStudentEMIS}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dropoutStudentInstCode" className="form-label">
            Institution Code:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="dropoutStudentInstCode"
            name="dropoutStudentInstCode"
            value={addDropout.dropoutStudentInstCode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dropoutStudentDate" className="form-label">
            Dropout Date: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="dropoutStudentDate"
            name="dropoutStudentDate"
            value={addDropout.dropoutStudentDate}
            onChange={handleChange}
            required
          />
          {errors.dropoutStudentDate && (
            <span className="text-danger">{errors.dropoutStudentDate}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dropoutStudentReason" className="form-label">
            Reason for Dropout: <span className="text-danger fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="dropoutStudentReason"
            name="dropoutStudentReason"
            value={addDropout.dropoutStudentReason}
            onChange={handleChange}
            required
          />
          {errors.dropoutStudentReason && (
            <span className="text-danger">{errors.dropoutStudentReason}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const addDropoutPostRequest = async(dropoutStudentData) =>{
  try {
    await axios.post('http://localhost:8000/addDropout', dropoutStudentData );
    console.log('Dropout Student added successfully');
  } catch (error) {
    console.error('Error adding Dropout Student:', error);
  }
}

const studentAuthentication = async (studentData) => {
  try {
    const response = await axios.get('http://localhost:8000/getDropoutStudents');
    const students = response.data;
    
     
  } catch (error) {
    console.error('Error fetching student data:', error);
  }
}

export default AddDropout;
