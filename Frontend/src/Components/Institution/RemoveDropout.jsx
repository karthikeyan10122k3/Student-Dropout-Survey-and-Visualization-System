import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Assets/Styles/Institution/removeDropout.css";

const RemoveDropout = ({ setActiveComponent }) => {
  const [droppedOutStudents, setDroppedOutStudents] = useState([]);

  useEffect(() => {
    const fetchDroppedOutStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/getDropoutStudents"
        );
        setDroppedOutStudents(response.data);
      } catch (error) {
        console.error("Error fetching dropped out students:", error);
      }
    };

    fetchDroppedOutStudents();
  }, []);

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  const handleRemove = async (index) => {
    try {
      const removedStudentId = droppedOutStudents[index]._id;
      await axios.delete(
        `http://localhost:8000/removeDropout/${removedStudentId}`
      );

      // Update the state after successful deletion
      const updatedStudents = droppedOutStudents.filter(
        (student, i) => i !== index
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
                  onClick={() => handleRemove(index)}
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
