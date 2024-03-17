import { useState } from "react";
import { dropOutStudentData as dropOutData } from "./AddDropout"; // Importing as dropOutData to avoid naming conflict
import "../../Assets/Styles/Institution/removeDropout.css";

const RemoveDropout = ({ setActiveComponent }) => {
  const [students, setStudents] = useState(dropOutData);

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  const handleRemove = (index) => {
    // Create a new array without the removed student
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents, () => {
      // Update the dropOutStudentData array
      dropOutData.splice(index, 1);
    });
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
          {students.map((student, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemoveDropout;
