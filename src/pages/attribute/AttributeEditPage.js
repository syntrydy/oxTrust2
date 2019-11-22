import React from "react";
import OxBreadCumb from "../../layouts/OxBreadCumb";
import AttributeFrom from "../../components/attribute/AttributeForm";

const AttributeEditPage = props => {
  const breads = [
    {
      path: "/attributes",
      text: "Attributes"
    },
    {
      path: "",
      text: props.match.params.gid.substring(1, 100)
    }
  ];
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <AttributeFrom />
    </div>
  );
};

export default AttributeEditPage;
