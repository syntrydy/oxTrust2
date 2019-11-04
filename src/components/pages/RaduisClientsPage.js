import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";

const breads = [
  {
    path: "/raduis/clients",
    text: "Raduis clients"
  }
];

const RaduisClientsPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
    </div>
  );
};

export default RaduisClientsPage;
