import React from "react";
import ClientFrom from "../openidclient/ClientForm";
import OxBreadCumb from "../layouts/OxBreadCumb";

const breads = [
  {
    path: "/clients",
    text: "Clients"
  },
  {
    path: "",
    text: "Adding New Client"
  }
];

const ClientAddPage = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <ClientFrom></ClientFrom>
    </div>
  );
};

export default ClientAddPage;
