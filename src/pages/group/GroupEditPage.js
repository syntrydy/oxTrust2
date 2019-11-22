import React from "react";
import OxBreadCumb from "../../layouts/OxBreadCumb";
import GroupFrom from "../../components/group/GroupForm";

const GroupEditPage = props => {
  const breads = [
    {
      path: "/groups",
      text: "Groups"
    },
    {
      path: "",
      text: props.match.params.gid.substring(1, 100)
    }
  ];

  return (
    <div style={{ maxWidth: "100%" }}>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <GroupFrom />
    </div>
  );
};

export default GroupEditPage;
