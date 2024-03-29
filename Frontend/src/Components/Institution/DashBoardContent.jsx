import "../../Assets/Styles/Institution/dashBoardContent.css";

const DashBoardContent = ({ setActiveComponent, institutionName}) => {
  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
       {institutionName}
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Join our community in keeping dreams alive. Together, we'll overcome
            challenges, celebrate success, and ensure every student's journey is
            filled with opportunity and support. Let's work together to make
            dropout a thing of the past.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              onClick={() => setActiveComponent("add")}
              className="btn btn-primary btn-lg p-2 gap-1"
            >
              Add Dropout
            </button>
            <button
              onClick={() => setActiveComponent("remove")}
              className="btn btn-primary btn-lg p-2 gap-1"
            >
              Remove Dropout
            </button>
            <button
              onClick={() => setActiveComponent("view")}
              className="btn btn-primary btn-lg p-2 gap-1"
            >
              View Dropout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
