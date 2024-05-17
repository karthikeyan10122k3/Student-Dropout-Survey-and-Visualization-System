import 'bootstrap/dist/css/bootstrap.min.css';

import registerPageStyle from "../../Assets/Styles/Registration/registerPage.module.css";


import RegisterContent from "../../Components/Registration/RegisterContent";

function RegisterPage() {
  return (
    <div className={`register `}>
      <RegisterContent />
    </div>
  );
}

export default RegisterPage;
