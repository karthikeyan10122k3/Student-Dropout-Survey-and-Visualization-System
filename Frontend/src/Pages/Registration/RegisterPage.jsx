import "bootstrap/dist/css/bootstrap.min.css";

import registerPageStyle from "../../Assets/Styles/Registration/registerPage.module.css";
import RegisterOption from "../../Components/Registration/RegisterOption";


function RegisterPage() {
  return (
    <div className={`d-flex align-items-center justify-content-center vh-100 ${registerPageStyle.pageBackGroungColor}`}>
      <RegisterOption />
    </div>
  );
}

export default RegisterPage;
