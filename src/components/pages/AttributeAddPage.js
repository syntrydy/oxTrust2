import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";
import AttributeFrom from "../attribute/AttributeForm"

const breads = [
  {
    path: "/attributes",
    text: "Attributes"
  },
  {
    path: "",
    text: "Adding New Attribute"
  }
];

const AttributeAddPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <AttributeFrom/>
    </div>
  );
};
export default AttributeAddPage;
