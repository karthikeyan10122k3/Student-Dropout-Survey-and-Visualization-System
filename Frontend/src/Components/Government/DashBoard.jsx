import { useEffect, useState } from "react";
import YearChart from "./YearChart";
import DashBoardContent from "./DashBoardContent";
import AgeChart from "./AgeChart";
import ReasonChart from "./ReasonChart";
import GenderChart from "./GenderChart";
import axios from "axios";

const Dashboard = ({ governmentState }) => {
  const [activeComponent, setActiveComponent] = useState("dashBoard");
  const [dropoutCount, setDropoutCount] = useState("dashBoard");
  let componentToRender;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/student/surveySubmit"
        );
        const students = response.data;

        const filteredStudents = students.filter(
          (student) => student.studentInstituteState === governmentState
        );

        setDropoutCount(filteredStudents.length);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, [governmentState]);

  if (activeComponent === "dashBoard") {
    componentToRender = (
      <DashBoardContent
        setActiveComponent={setActiveComponent}
        dropoutCount={dropoutCount}
      />
    );
  } else if (activeComponent === "yearChart") {
    componentToRender = (
      <YearChart
        setActiveComponent={setActiveComponent}
        governmentState={governmentState}
      />
    );
  } else if (activeComponent === "ageChart") {
    componentToRender = (
      <AgeChart
        setActiveComponent={setActiveComponent}
        governmentState={governmentState}
      />
    );
  } else if (activeComponent === "reasonChart") {
    componentToRender = (
      <ReasonChart
        setActiveComponent={setActiveComponent}
        governmentState={governmentState}
      />
    );
  } else if (activeComponent === "genderChart") {
    componentToRender = (
      <GenderChart
        setActiveComponent={setActiveComponent}
        governmentState={governmentState}
      />
    );
  }

  return <div>{componentToRender}</div>;
};

export default Dashboard;
