import homePageContentStyle from "../../Assets/Styles/Home/homePageContent.module.css";
import { Link } from 'react-router-dom';


const MainContent = () => {
  return (
    <main>
      <section>
        <div className={homePageContentStyle.homePagecontent}>
          <h2>Student Dropout</h2>
          <h2>Analysis</h2>

          <p>
            This Website to collect data and analyze findings. This
            comprehensive understanding aids policymakers in implementing
            targeted interventions to reduce dropout rates.
          </p>
          
          <div className={homePageContentStyle.homePagebuttonSection}>
            <Link to="/register"><button>Register</button></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;