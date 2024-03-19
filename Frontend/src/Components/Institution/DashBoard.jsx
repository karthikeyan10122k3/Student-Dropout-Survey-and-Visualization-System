import React, { useState } from "react";

import AddDropout from "./AddDropout";
import ViewDropout from "./ViewDropout";
import RemoveDropout from "./RemoveDropout";
import DashBoardContent from "./DashBoardContent";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashBoard");

  let componentToRender;
  if (activeComponent === "dashBoard") {
    componentToRender = (
      <DashBoardContent setActiveComponent={setActiveComponent} />
    );
  } else if (activeComponent === "add") {
    componentToRender = <AddDropout setActiveComponent={setActiveComponent} />;
  } else if (activeComponent === "remove") {
    componentToRender = (
      <RemoveDropout setActiveComponent={setActiveComponent} />
    );
  } else if (activeComponent === "view") {
    componentToRender = <ViewDropout setActiveComponent={setActiveComponent} />;
  }

  return <div>{componentToRender}</div>;
};

export default Dashboard;
