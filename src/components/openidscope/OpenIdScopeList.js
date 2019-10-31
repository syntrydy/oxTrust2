import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const OpenIdScopeList = props => {
  const items = [
    {
      icon: "add",
      text: "Scope",
      handle:goToScopeAddPage
    },
    {
      icon: "list",
      text: "Clients",
      handle:goToClientsPage
    }
  ];

  const classes = makeStyles({
    colorSecondary: {
      background: "#8b0000"
    }
  });
  const [selection, setSelection] = useState(null);
  function goToScopeDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/openid/scope/detail:` + row);
  }
  function goToClientsPage() {
    const { history } = props;
    if (history) history.push('/openid/clients');
  }
  function goToScopeAddPage() {
    const { history } = props;
    if (history) history.push('/openid/scope/add');
  }
  function showDialogBox(id) {
    console.log("=========== " + id);
    alert("Want to delete scope with id "+id);
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "Inum", field: "inum" },
          { title: "Display Name", field: "displayname" },
          { title: "Description", field: "description" },
          { title: "Dynamic registration",field: "registation",type: "boolean"}
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
            tooltip: "Show scope detail",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToScopeDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit Scope",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: "delete",
            tooltip: "Delete Scope",
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
export default withRouter(OpenIdScopeList);

