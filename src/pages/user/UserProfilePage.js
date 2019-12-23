import React from "react";
import OxBreadCumb from "../../layouts/OxBreadCumb";
import Profile from "../../components/user/Profile";

const UserProfilePage = () => {
    const breads = [
        {
          path: "",
          text: "User Profile"
        }
      ];
  return <div>
  <OxBreadCumb breads={breads} />
  <div style={{ height: "5px" }}></div>
  <Profile/>
</div>;
};

export default UserProfilePage;
