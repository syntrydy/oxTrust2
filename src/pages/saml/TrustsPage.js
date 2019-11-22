import React from "react";
import TrustList from "../../components/saml/TrustsList";
import OxBreadCumb from "../../layouts/OxBreadCumb";

const breads = [
  {
    path: "/saml",
    text: "SAML Trusts"
  }
];
const data = [
  {
    inum: "43F123",
    displayname: "InCommon",
    description: "InCommon Federation",
    status: "active",
    validation: "success",
    type: "federation"
  },
  {
    inum: "43F67F",
    displayname: "Gluu Trust",
    description: "Gluu trust relationship",
    status: "active",
    validation: "Pending",
    type: "simple TR"
  }
];

const TrustsPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <TrustList data={data} />
    </div>
  );
};

export default TrustsPage;
