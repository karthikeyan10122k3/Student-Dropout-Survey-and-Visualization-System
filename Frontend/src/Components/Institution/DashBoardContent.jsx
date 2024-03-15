import { Link } from 'react-router-dom';
import "../../Assets/Styles/Institution/dashBoardContent.css"

const DashBoardContent = () => {
  return (
    <div className="container">
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="..."
          alt="Inst logo"
          width="72"
          height="57"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">Institution Name</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Join our community in keeping dreams alive. Together, we'll overcome
            challenges, celebrate success, and ensure every student's journey is
            filled with opportunity and support. Let's work together to make
            dropout a thing of the past.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/addDropout"><button type="button" class="btn btn-primary btn-lg p-2 gap-1">Add Dropout</button></Link>
            <button type="button" class="btn btn-primary btn-lg p-2 gap-1">
              Remove Dropout
            </button>
            <button type="button" class="btn btn-primary btn-lg p-2 gap-1">
              View Dropout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
