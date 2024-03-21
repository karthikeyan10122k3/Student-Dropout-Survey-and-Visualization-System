import { useState } from "react";
import YearChart from "./YearChart";
import DashBoardContent from "./DashBoardContent";
import AgeChart from "./AgeChart";
import ReasonChart from "./ReasonChart";
import GenderChart from "./GenderChart";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashBoard");
  let componentToRender;

  if (activeComponent === "dashBoard") {
    componentToRender = (
      <DashBoardContent setActiveComponent={setActiveComponent} />
    );
  } else if (activeComponent === "yearChart") {
    componentToRender = <YearChart setActiveComponent={setActiveComponent} />;
  } else if (activeComponent === "ageChart") {
    componentToRender = <AgeChart setActiveComponent={setActiveComponent} />;
  } else if (activeComponent === "reasonChart") {
    componentToRender = <ReasonChart setActiveComponent={setActiveComponent} />;
  } else if (activeComponent === "genderChart") {
    componentToRender = <GenderChart setActiveComponent={setActiveComponent} />;
  }

  return <div>{componentToRender}</div>;
};

export default Dashboard;
