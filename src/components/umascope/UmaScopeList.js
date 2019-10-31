import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import { withRouter } from "react-router-dom";
import AcceptDialog from "../layouts/OxAcceptDialog";
const UmaScopeList = props => {
  const items = [
    {
      icon: "add",
      text: "Scope",
      handle: goToUmaScopeAddPage
    },
    {
      icon: "list",
      text: "Uma Resources",
      handle: goToUmaResourcesPage
    }
  ];

  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  function goToUmaScopeDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/uma/scope/detail:` + row);
  }
  function goToUmaResourcesPage(row) {
    const { history } = props;
    if (history) history.push(`/uma/resources`);
  }
  function goToUmaScopeEditPage(row) {
    const { history } = props;
    if (history) history.push(`/uma/scope/edit:` + row);
  }
  function goToUmaScopeAddPage() {
    const { history } = props;
    if (history) history.push("/uma/scope/add");
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
          { title: "DisplayName", field: "displayname" },
          { title: "Action", field: "action" }
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
            tooltip: "Show uma scope detail",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToUmaScopeDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit uma scope",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToUmaScopeEditPage(rowData.tableData.id);
            }
          },
          {
            icon: "delete",
            tooltip: "Delete uma scope",
            iconProps: { color: "error" },
            onClick: (event, rowData) => {
              showDialogBox(rowData.name);
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
export default withRouter(UmaScopeList);
