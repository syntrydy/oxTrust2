import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";
import UmaResourceList from "../umaresource/UmaResourceList";

const breads = [
  {
    path: "/uma/resources",
    text: "Uma Resources"
  }
];

const data = [
  {
    id: "1403.0484675c-483c-4538-b043-867729a66ede",
    name: "oxTrust api Resource",
    scopes: "SCIM Access, API Full Access",
    uri: "http://www.gluu.org/img/api_logo.png"
  },
  {
    id: "1403.0484675c-483c-4538-b043-867729a66ede",
    name: "Passport Resource",
    scopes: "SCIM Access",
    uri: "http://www.gluu.org/img/api_logo.png"
  },
  {
    id: "1403.0484675c-483c-4538-b043-867729a66ede",
    name: "SCIM Resource",
    scopes: "API Full Access",
    uri: "http://www.gluu.org/img/api_logo.png"
  }
];

const UmaResourcesPage = props => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <UmaResourceList data={data} />
    </div>
  );
};

export default UmaResourcesPage;
