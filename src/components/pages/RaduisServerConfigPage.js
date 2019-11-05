import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";
import OxCustomTabs from "../layouts/OxCustomTabs";

const breads = [
  {
    path: "/raduis/config",
    text: "Raduis Server Config"
  }
];

const RaduisServerConfigPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <OxCustomTabs />
    </div>
  );
};

export default RaduisServerConfigPage;
