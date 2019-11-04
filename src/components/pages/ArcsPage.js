import React from "react";
import AcrList from "../saml/AcrsList";
import OxBreadCumb from "../layouts/OxBreadCumb";

const breads = [
  {
    path: "/saml/acr",
    text: "SAML ACRS"
  }
];
const data = [
  {
    inum: "53535HZUZUZ44",
    classReference: "urn:oasis:names:tc:SAML:2.0:ac:classes:InternetProtocol"
  },
  {
    inum: "7ZSS9911111",
    classReference:
      "urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport"
  }
];

const AcrsPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <AcrList data={data} />
    </div>
  );
};

export default AcrsPage;
