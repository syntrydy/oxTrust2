import React from "react";
import OxBreadCumb from "../layouts/OxBreadCumb";
import CertificatesList from "../certificate/CertificatesList";

const breads = [
  {
    path: "/certificates",
    text: "Certificates"
  }
];
const data = [
  {
    alias: "OpenDJ SSL",
    Algorithm: "SHA1WITHRSA",
    issuer: "O=OpenDJ RSA Self-Signed Certificate,CN=localhost",
    startDate: "17-06-2018",
    endDate: "20-06-2018"
  },
  {
    alias: "HTTPD SSL",
    Algorithm: "SHA256WITHRSA",
    issuer: "C=jj,ST=jj,L=jj,O=jj,CN=c3.gluu.org,E=jj@jj.jj",
    startDate: "11-06-2018",
    endDate: "17-06-2018"
  },
];

const CertificatesPage = () => {
  return (
    <div>
      <OxBreadCumb breads={breads} />
      <div style={{ height: "5px" }}></div>
      <CertificatesList data={data} />
    </div>
  );
};

export default CertificatesPage;
