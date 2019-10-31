import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";
import AttributeList from "../attribute/AttributeList";

const breads = [
  {
    path: "/attributes",
    text: "Attributes"
  }
];

const data = [
    {
      name: "bithday",
      displayname: "Bithday",
      origin: "gluuPerson",
      description: "End-User's birthday",
      status: "active"
    },
    {
      name: "mail",
      displayname: "Email",
      origin: "gluuPerson",
      description: "Primary Email Address",
      status: "inactive"
    },
    {
      name: "givenName",
      displayname: "GivenName",
      origin: "gluuPerson",
      description: "Given name(s) or first name(s) of the End-User.Note that in some cultures, people can have multiple given names;all can be present, with the names being separated by space characters.",
      status: "active"
    },
    {
      name: "iname",
      displayname: "IName",
      origin: "gluuPerson",
      description: "iname",
      status: "inactive"
    }
  ];
  

const AttributesPages = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <AttributeList data={data} />
    </div>
  );
};

export default AttributesPages;
