import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewDropout = ({ setActiveComponent, institutionCode }) => {
  const [droppedOut, setDroppedOut] = useState([]);

  useEffect(() => {
    const fetchDropoutStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/institution/getDropoutStudents");
        const filteredStudents = response.data.filter(student => student.dropoutStudentInstCode === institutionCode);
        console.log(filteredStudents);
        setDroppedOut(filteredStudents);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDropoutStudents();
  }, [institutionCode]); 

  const handleBackButton = () => {
    setActiveComponent("dashBoard");
  };

  return (
    <div className="container mt-3">
      <button onClick={handleBackButton} className="btn btn-primary mb-3 px-4">
        Back
      </button>
      <h2 className="text-center mb-4">Dropped Out Students</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Student Name</th>
            <th>EMIS Number</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Date</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {droppedOut.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.dropoutStudentName}</td>
              <td>{student.dropoutStudentEMIS}</td>
              <td>{student.dropoutStudentMobile}</td>
              <td>{student.dropoutStudentEmail}</td>
              <td>{student.dropoutStudentDate}</td>
              <td>{student.dropoutStudentReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDropout;
