import React from "react";
import OpenIdClientList from "../../components/openidclient/OpenIdClientList";
import OxBreadCumb from "../../layouts/OxBreadCumb";

const breads = [
  {
    path: "/openid/clients",
    text: "OpenIdConnect Clients"
  }
];
 const data=[
    {
      displayname: "SCIM Resource Server Client",
      scopes: 3,
      type: "native"
    },
    {
      displayname: "SCIM Requesting Party Client",
      scopes: 0,
      type: "native"
    },
    {
      displayname: "oxTrust Admin GUI",
      scopes: 4,
      type: "web"
    },
    {
      displayname: "Passport Resource Server Client",
      scopes: 2,
      type: "native"
    }
  ];

const OpenIdClientsPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <OpenIdClientList data={data}/>
    </div>
  );
};

export default OpenIdClientsPage;
