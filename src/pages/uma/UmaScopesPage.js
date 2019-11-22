import React from "react";
import OxBreadCumb from "../../layouts/OxBreadCumb";
import UmaScopeList from "../../components/umascope/UmaScopeList";

const breads = [
  {
    path: "/uma/scopes",
    text: "Uma Scopes"
  }
];

const data = [
  {
    inum: "377GE",
    displayname: "SCIM Access",
    action: "https://c2.gluu.org/oxauth/restv1/uma/scopes/scim_access"
  },
  {
    inum: "17GE",
    displayname: "API Full Access",
    action: "https://c2.gluu.org/oxauth/restv1/uma/scopes/api_full_access"
  },
  {
    inum: "46G1",
    displayname: "API Write Access",
    action: "https://c2.gluu.org/oxauth/restv1/uma/scopes/api_write_access"
  },
  {
    inum: "67EE",
    displayname: "API React Access",
    action: "https://c2.gluu.org/oxauth/restv1/uma/scopes/api_read__access"
  }
];

const UmaScopesPage = props => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <UmaScopeList data={data} />
    </div>
  );
};

export default UmaScopesPage;
