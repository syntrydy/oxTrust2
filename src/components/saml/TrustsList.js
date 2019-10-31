import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const TrustsList = props => {
  const items = [
    {
      icon: "add",
      text: "Trust",
      handle:goToTrustAddPage
    }
  ];

  const classes = makeStyles({
    colorSecondary: {
      background: "#8b0000"
    }
  });
  const [selection, setSelection] = useState(null);
  function goToTrustDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/saml/detail:` + row);
  }
  function goToTrustAddPage() {
    const { history } = props;
    if (history) history.push('/saml/add');
  }
  function showDialogBox(id) {
    console.log("=========== " + id);
    alert("Want to delete trust with id "+id);
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "Inum", field: "inum" },
          { title: "Display Name", field: "displayname" },
          { title: "Type", field: "type", type: "numeric" },
          {
            title: "Validation",
            field: "validation",
            render: rowData => (
              <Chip
                classes={{ colorSecondary: classes.colorSecondary }}
                color="primary"
                label={rowData.validation}
              />
            )
          },
          {
            title: "Status",
            field: "type",
            render: rowData => (
              <Chip
                classes={{ colorSecondary: classes.colorSecondary }}
                color="primary"
                label={rowData.status}
              />
            )
          }
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
            icon: "visibility",
            tooltip: "Show trust detail",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToTrustDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit trust",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: "delete",
            tooltip: "Delete trust",
            iconProps: { color: "error" },
            onClick: (event, rowData) => {
              showDialogBox(rowData.tableData.id);
            }
          }
        ]}
        data={props.data}
        onRowClick={(evt, row) => setSelection(row)}
      />
    </div>
  );
};
export default withRouter(TrustsList);
