import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Assets/Styles/Institution/removeDropout.css";

const RemoveDropout = ({ setActiveComponent, institutionCode }) => {
  const [droppedOutStudents, setDroppedOutStudents] = useState([]);

  useEffect(() => {
    const fetchDroppedOutStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/institution/getDropoutStudents"
        );

        const filteredStudents = response.data.filter(
          (student) => student.dropoutStudentInstCode === institutionCode
        );

        setDroppedOutStudents(filteredStudents);
      } catch (error) {
        console.error("Error fetching dropped out students:", error);
      }
    };

    fetchDroppedOutStudents();
  }, [institutionCode]); 

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  const handleRemove = async (studentId) => {
    try {
      await axios.delete(`http://localhost:8000/institution/removeDropout/${studentId}`);

      const updatedStudents = droppedOutStudents.filter(
        (student) => student._id !== studentId
      );
      setDroppedOutStudents(updatedStudents);
    } catch (error) {
      console.error("Error removing student:", error);
    }
  };

  return (
    <div className="container mt-3">
      <button
        onClick={handleBackButton}
        className="btn btn-primary mb-3 px-4"
      >
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
          {droppedOutStudents.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.dropoutStudentName}</td>
              <td>{student.dropoutStudentEMIS}</td>
              <td>{student.dropoutStudentEmail}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(student._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemoveDropout;
