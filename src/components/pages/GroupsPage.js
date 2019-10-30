import React from "react";
import GroupList from "../group/GroupList";
import OxBreadCumb from "../layouts/OxBreadCumb";

const breads = [
  {
    path: "/groups",
    text: "Groups"
  }
];

const GroupsPage = (props) => {
  return (
    <div>
      <OxBreadCumb breads={breads}/>
      <div style={{height:'5px'}}></div>
      <GroupList />
    </div>
  );
};
export default GroupsPage;
