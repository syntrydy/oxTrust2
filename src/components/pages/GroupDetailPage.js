import React from "react";
import GroupDetail from "../group/GroupShortDetail";
import OxBreadCumb from "../layouts/OxBreadCumb";

const GroupDetailPage = props => {
  const groupId = props.match.params.gid;
  return (
    <div>
      <OxBreadCumb />
      <div style={{ height: "5px" }}></div>
      <GroupDetail groupId={groupId} />
    </div>
  );
};

export default GroupDetailPage;
