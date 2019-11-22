import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../../layouts/OxTitle";
import { withRouter } from "react-router-dom";
import AcceptDialog from "../../layouts/OxAcceptDialog";
const OpenIdScopeList = props => {
  const items = [
    {
      icon: "add",
      text: "Scope",
      handle: goToScopeAddPage
    },
    {
      icon: "list",
      text: "Clients",
      handle: goToClientsPage
    }
  ];
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
  };
  function goToScopeDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/openid/scope/detail:` + row);
  }
  function goToScopeEditPage(row) {
    const { history } = props;
    if (history) history.push(`/openid/scope/edit:` + row);
  }
  function goToClientsPage() {
    const { history } = props;
    if (history) history.push("/openid/clients");
  }
  function goToScopeAddPage() {
    const { history } = props;
    if (history) history.push("/openid/scope/add");
  }
  function showDialogBox(name) {
    setRow(name);
    setOpen(true);
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "Inum", field: "inum" },
          { title: "Display Name", field: "displayname" },
          { title: "Description", field: "description" },
          {
            title: "Dynamic registration",
            field: "registation",
            type: "boolean"
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
            onClick: (event, rowData) => {
              goToScopeEditPage(rowData.inum);
            }
          },
          {
            icon: "delete",
            tooltip: "Delete Scope",
            iconProps: { color: "error" },
            onClick: (event, rowData) => {
              showDialogBox(rowData.displayname);
            }
          }
        ]}
        data={props.data}
        onRowClick={(evt, row) => setSelection(row)}
      />
      <AcceptDialog row={row} handleClose={handleClose} open={open} />
    </div>
  );
};
export default withRouter(OpenIdScopeList);
