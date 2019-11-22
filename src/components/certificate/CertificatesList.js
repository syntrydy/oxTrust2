import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../../layouts/OxTitle";
import { withRouter } from "react-router-dom";
const CertificatesList = props => {
  const items = [];
  const [selection, setSelection] = useState(null);

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "Alias", field: "alias" },
          { title: "Algorithm", field: "algorithm" },
          { title: "Start Date", field: "startDate" },
          { title: "End Date", field: "endDate" },
          { title: "Issuer", field: "issuer" }
        ]}
        options={{
          actionsColumnIndex: -1,
          selection: false,
          headerStyle: {
            backgroundColor: "#19857b",
            color: "#FFF",
            fontSize: "1.2em"
          },
          rowStyle: rowData => ({
            textAlign: "center",
            backgroundColor:
              selection && selection.tableData.id === rowData.tableData.id
                ? "#D8FBF8"
                : "#FFF"
          })
        }}
        actions={[
          {
            icon: "class",
            tooltip: "Download this certificate",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {}
          }
        ]}
        data={props.data}
        onRowClick={(evt, row) => setSelection(row)}
      />
    </div>
  );
};
export default withRouter(CertificatesList);
