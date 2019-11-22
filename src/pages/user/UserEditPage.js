import React from 'react'
import OxBreadCumb from "../../layouts/OxBreadCumb";
import UserFrom from "../../components/user/UserForm";

const UserEditPage =(props) => {
    const breads = [
        {
          path: "/users",
          text: "Users"
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
            <UserFrom></UserFrom>
          </div>
        )
    }

export default UserEditPage
