import homePageContentStyle from "../../Assets/Styles/Home/homePageContent.module.css";
import { Link } from 'react-router-dom';
import Header from "./Header";

const MainContent = () => {
  return (
    <main>
      <Header />
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
          <Link to="/register/options"><button>Get Started</button></Link>
        </div>
      </div>
    </section>
  </main>
  );
};

export default MainContent;