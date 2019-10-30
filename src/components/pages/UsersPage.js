import React from "react";
import UserList from "../user/UserList";
import OxBreadCumb from "../layouts/OxBreadCumb";

const breads = [
    {
      path: "/users",
      text: "Users"
    }
  ];

const UsersPage = () => {
  return (
    <div>
      <OxBreadCumb  breads={breads}/>
      <div style={{ height: "5px" }}></div>
      <UserList />
    </div>
  );
};
export default UsersPage;
