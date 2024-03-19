import { useState } from "react";
import axios from 'axios';
import "../../Assets/Styles/Institution/removeDropout.css";

const RemoveDropout = ({ setActiveComponent }) => {
  

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  const handleRemove = (index) => {
    
  };

  return (
    <div className="container mt-3">
      <button onClick={handleBackButton} className="btn btn-primary mb-3 px-4">
        Back
      </button>
      <h2 className="text-center mb-4">Remove Dropped Out Student</h2>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Student Name</th>
            <th>EMIS Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.instStudentName}</td>
              <td>{student.instStudentEMISNum}</td>
              <td>{student.instStudentEmail}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(index)} 
                >
                  Remove
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default RemoveDropout;
