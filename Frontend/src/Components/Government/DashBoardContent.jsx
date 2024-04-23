import "../../Assets/Styles/Government/dashBoardContent.css"


const DashBoardContent = ({ setActiveComponent, dropoutCount }) => {

  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Ministry of Education</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Join our community in keeping dreams alive. Together, we'll overcome
            challenges, celebrate success, and ensure every student's journey is
            filled with opportunity and support. Let's work together to make
            dropout a thing of the past.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4" onClick={() => setActiveComponent('yearChart')}>
              Yearly Chart
            </button>
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={() => setActiveComponent('ageChart')}>
              Age Chart
            </button>
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={() => setActiveComponent('reasonChart')}>
              Reason Chart
            </button>
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={() => setActiveComponent('genderChart')}>
              Gender Chart
            </button>
          </div>
          <h4 className="fw-bold text-body-emphasis mt-4">Total Number of Survey Recorded Till Date: {dropoutCount}</h4>
          <div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
