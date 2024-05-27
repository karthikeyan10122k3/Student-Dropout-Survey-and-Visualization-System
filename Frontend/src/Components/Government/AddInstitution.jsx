import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddInstitution = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const government = location.state?.government;
  const accessToken = location.state?.accessToken;
  const [institution, setInstitution] = useState({
    institutionName: "",
    institutionState: government.governmentState,
    institutionEmail: "",
    institutionCode: "",
    institutionPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstitution((prevInstitution) => ({
      ...prevInstitution,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!institution.institutionName.trim()) {
      newErrors.institutionName = "Institution name is required";
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
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const institutionData = {
        institutionCode: institution.institutionCode,
        institutionName: institution.institutionName,
        governmentState: government.governmentState,
        institutionState: government.governmentState,
        institutionEmail: institution.institutionEmail,
        institutionPassword: institution.institutionPassword,
        institutionWebsite:""
      };

      InstitutionPostRequest(institutionData);

      setInstitution({
        institutionName: "",
        institutionState: government.governmentState,
        institutionEmail: "",
        institutionCode: "",
        institutionPassword: "",
      });
    }
  };

  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-center vh-100`}
      >
        <div className={`container mt-2 mb-5`}>
          <div className={`row `}>
            <div className="col-md-8 offset-md-2">
              <div className={`border border-primary rounded p-3 bg-light`}>
                <div className="text-center">
                  <h5 className="text-primary text">Add Institution</h5>
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
                      value={government.governmentState}
                    />
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
                  <div className="text-center">
                    <button
                      className="btn btn-secondary my-2 me-3"
                      onClick={() => navigate("/government", {
                        state: { govEmail: government.governmentEmail , accessToken:accessToken },
                      })}
                    >
                      Back
                    </button>
                    <button type="submit" className="btn btn-primary my-2 ">
                      Add
                    </button>
                  </div>
                </form>
              </div>
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
      "http://localhost:8000/government/addInstitution",
      institutionData
    );
    console.log("Institution User added successfully");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export default AddInstitution;
