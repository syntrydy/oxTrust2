import React from "react";
import OpenIdScopeList from "../../components/openidscope/OpenIdScopeList";
import OxBreadCumb from "../../layouts/OxBreadCumb";

const breads = [
  {
    path: "/scopes",
    text: "OpenIdConnect Scopes"
  }
];
const data = [
  {
    inum: "43F1",
    displayname: "profile",
    description: "View your basic profile info.",
    registation: true
  },
  {
    inum: "F0C4",
    displayname: "openid",
    description: "Authenticate using OpenID Connect",
    registation: true
  },
  {
    inum: "D491",
    displayname: "phone",
    description: "View your phone number.",
    registation: true
  },
  {
    inum: "C17A",
    displayname: "address",
    description: "View your address.",
    registation: false
  },
  {
    inum: "22F1",
    displayname: "clientinfo",
    description: "View the client info.",
    registation: true
  },
  {
    inum: "11C1",
    displayname: "email",
    description: "View your email address.",
    registation: true
  }
];

const OpenIdScopesPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <OpenIdScopeList data={data} />
    </div>
  );
};

export default OpenIdScopesPage;
