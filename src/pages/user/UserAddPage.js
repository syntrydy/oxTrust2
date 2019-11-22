import React from "react";
import OxBreadCumb from "../../layouts/OxBreadCumb";
import UserFrom from "../../components/user/UserForm";

const breads = [
  {
    path: "/users",
    text: "Users"
  },
  {
    path: "",
    text: "Adding New user"
  }
];

const UserAddPage = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <UserFrom></UserFrom>
    </div>
  );
};

export default UserAddPage;
