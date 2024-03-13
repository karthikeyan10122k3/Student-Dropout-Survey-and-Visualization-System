import homePageContentStyle from "../../Assets/Styles/HomePage/homePageContent.module.css";

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
            <a href="#">
              <button>Register</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;