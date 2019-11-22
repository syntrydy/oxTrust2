import React from "react";
import GroupList from "../../components/group/GroupList";
import OxBreadCumb from "../../layouts/OxBreadCumb";

const breads = [
  {
    path: "/groups",
    text: "Groups"
  }
];

const data = [
  {
    name: "Administrators",
    description: " Group for administrators",
    members: 2,
    status: "active"
  },
  {
    name: "Managers",
    description: " Group for manager",
    members: 5,
    status: "inactive"
  },
  {
    name: "Guest",
    description: " Group for guests",
    members: 2,
    status: "active"
  },
  {
    name: "Guest",
    description: " Group for guests",
    members: 2,
    status: "active"
  },
  {
    name: "Guest",
    description: " Group for guests",
    members: 2,
    status: "active"
  },
  {
    name: "Guest",
    description: " Group for guests",
    members: 2,
    status: "active"
  }
];

const GroupsPage = props => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <GroupList data={data} />
    </div>
  );
};
export default GroupsPage;
