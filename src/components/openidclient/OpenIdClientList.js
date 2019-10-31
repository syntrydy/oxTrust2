import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const OpenIdClientList = props => {
  const items = [
    {
      icon: "add",
      text: "Client",
      handle:goToClientAddPage
    },
    {
      icon: "add",
      text: "Scope"
    },
    {
      icon: "list",
      text: "Scopes",
      handle:goToScopesPage
    }
  ];

  const classes = makeStyles({
    colorSecondary: {
      background: "#8b0000"
    }
  });
  const [selection, setSelection] = useState(null);
  function goToClientDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/openid/clients/detail:` + row);
  }
  function goToScopesPage() {
    const { history } = props;
    if (history) history.push('/openid/scopes');
  }
  function goToClientAddPage() {
    const { history } = props;
    if (history) history.push('/openid/clients/add');
  }
  function showDialogBox(id) {
    console.log("=========== " + id);
    alert("Want to delete client with id "+id);
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "Display Name", field: "displayname" },
          { title: "#Scopes", field: "scopes", type: "numeric" },
          {
            title: "Type",
            field: "type",
            render: rowData => (
              <Chip
                classes={{ colorSecondary: classes.colorSecondary }}
                color="primary"
                label={rowData.type}
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
            tooltip: "Show client detail",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToClientDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit Client",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: "delete",
            tooltip: "Delete Client",
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
export default withRouter(OpenIdClientList);
