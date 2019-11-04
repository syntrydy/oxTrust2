import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";

const breads = [
    {
      path: "/raduis/config",
      text: "Raduis Configuration"
    }
  ];

const RaduisServerConfigPage = () => {
  return <div>
       <OxBreadCumb breads={breads} />
  </div>;
};

export default RaduisServerConfigPage;
