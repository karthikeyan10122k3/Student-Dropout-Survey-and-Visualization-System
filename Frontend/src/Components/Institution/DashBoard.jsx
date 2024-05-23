import React, { useState } from "react";

import AddDropout from "./AddDropout";
import ViewDropout from "./ViewDropout";
import RemoveDropout from "./RemoveDropout";
import DashBoardContent from "./DashBoardContent";

const Dashboard = ({ institutionName, institutionCode }) => {
  const [activeComponent, setActiveComponent] = useState("dashBoard");

  let componentToRender;
  if (activeComponent === "dashBoard") {
    componentToRender = (
      <DashBoardContent
        setActiveComponent={setActiveComponent}
        institutionName={institutionName}
      />
    );
  } else if (activeComponent === "add") {
    componentToRender = (
      <AddDropout
        setActiveComponent={setActiveComponent}
        institutionCode={institutionCode}
      />
    );
  } else if (activeComponent === "remove") {
    componentToRender = (
      <RemoveDropout
        setActiveComponent={setActiveComponent}
        institutionCode={institutionCode}
      />
    );
  } else if (activeComponent === "view") {
    componentToRender = (
      <ViewDropout
        setActiveComponent={setActiveComponent}
        institutionCode={institutionCode}
      />
    );
  }

  return <div>{componentToRender}</div>;
};

export default Dashboard;
