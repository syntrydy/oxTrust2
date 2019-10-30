import React from "react";
import GroupDetail from "../group/GroupShortDetail";
import OxBreadCumb from "../layouts/OxBreadCumb";


const GroupDetailPage = props => {
  const groupId = props.match.params.gid;
  const breads = [
    {
      path: "/groups",
      text: "Groups"
    },
    {
      path: "",
      text: props.match.params.gid.substring(1, 2)
    }
  ];
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <GroupDetail groupId={groupId} />
    </div>
  );
};

export default GroupDetailPage;
