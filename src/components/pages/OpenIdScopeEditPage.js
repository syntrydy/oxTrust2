import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";

const OpenIdScopeEditPage = props => {
  const breads = [
    {
      path: "/openid/scopes",
      text: "OpenIdConnect Scopes"
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
export default OpenIdScopeEditPage;
