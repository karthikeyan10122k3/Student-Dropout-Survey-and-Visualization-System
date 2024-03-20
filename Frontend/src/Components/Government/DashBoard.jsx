import { useState } from 'react';
import  DisplayChart  from './YearChart'
import DashBoardContent from './DashBoardContent'



const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashBoard");
  let componentToRender;

  if (activeComponent === "dashBoard") {
    componentToRender = <DashBoardContent setActiveComponent={setActiveComponent} />;
  }
  else if (activeComponent === 'yearChart') {
    componentToRender = <DisplayChart setActiveComponent={setActiveComponent}  />;
  } 

  return <div>{componentToRender}</div>;
};

export default Dashboard;
