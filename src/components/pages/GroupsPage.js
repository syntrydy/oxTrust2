import React from "react";
import GroupList from "../group/GroupList";
import OxBreadCumb from "../layouts/OxBreadCumb";

const GroupsPage = () => {
  return (
    <div>
      <OxBreadCumb />
      <div style={{height:'5px'}}></div>
      <GroupList />
    </div>
  );
};
export default GroupsPage;
