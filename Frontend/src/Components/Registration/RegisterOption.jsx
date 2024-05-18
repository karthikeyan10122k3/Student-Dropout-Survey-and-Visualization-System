import registerOptionStyle from "../../Assets/Styles/Registration/registerOption.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterOption = () => {
  const navigate = useNavigate()

  return (
    <div className=" mt-2 text-center border border-primary rounded p-5  bg-light ">
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <p className="h3">Are you?</p>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <button
              className="btn btn-primary btn-lg mr-2"
              onClick={() => navigate("/register",{state:{ componentToSignUp: "government" }})}
            >
              Government
            </button>
            <button
              className="btn btn-primary btn-lg mr-2"
              onClick={() => navigate("/register",{state:{ componentToSignUp: "institution" }})}
            >
              Institution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOption;
