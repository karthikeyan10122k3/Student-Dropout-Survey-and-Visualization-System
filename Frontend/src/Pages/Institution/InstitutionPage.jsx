import Header from '../../Components/Institution/Header'
import DashBoardContent from '../../Components/Institution/DashBoardContent'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Institution =()=>{
  return(
    <>
    <div className="header" style={{ backgroundColor: "#FFA500" }}>
      <Header />
    </div>
    <div className="dashBoardContent">
      <DashBoardContent />
    </div>
    </>
  )
}

export default Institution