import React from "react";
import OxBreadCumb from "../../layouts/OxBreadCumb";

const OpenIdClientEditPage = props => {
  const breads = [
    {
      path: "/openid/clients",
      text: "OpenIdConnect Clients"
    },
    {
      path: "",
      text: props.match.params.gid.substring(1, 100)
    }
  ];

  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
    </div>
  );
};

export default OpenIdClientEditPage;
