import React from "react";
import ProviderList from "../../components/passport/ProviderList";
import OxBreadCumb from "../../layouts/OxBreadCumb";

const breads = [
  {
    path: "/passport/providers",
    text: "Providers"
  }
];
const data = [
  {
    id: "0000P01",  
    displayname: "LinkedIn",
    strategy:"linkedin",
    type: "openidconnect"
  },
  {
    id: "0000P02",  
    displayname: "Github",
    strategy:"github",
    type: "saml"
  }
];

const PassportProvidersPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <ProviderList data={data} />
    </div>
  );
};

export default PassportProvidersPage;
