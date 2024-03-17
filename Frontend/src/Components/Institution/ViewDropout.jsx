
import { dropOutStudentData } from "./AddDropout";
import "../../Assets/Styles/Institution/viewDropout.css";

const ViewDropout = ({ setActiveComponent }) => {
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
          {dropOutStudentData.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.instStudentName}</td>
              <td>{student.instStudentEMISNum}</td>
              <td>{student.instStudentMNum}</td>
              <td>{student.instStudentEmail}</td>
              <td>{student.instStudentDropoutdate}</td>
              <td>{student.instStudentReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDropout;
