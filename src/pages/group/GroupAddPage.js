import React from "react";
import GroupFrom from "../../components/group/GroupForm";
import OxBreadCumb from "../../layouts/OxBreadCumb";

const breads = [
  {
    path: "/groups",
    text: "Groups"
  },
  {
    path: "",
    text: "Adding New Group"
  }
];

const GroupAddPage = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <GroupFrom></GroupFrom>
    </div>
  );
};

export default GroupAddPage;
