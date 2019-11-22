import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../../layouts/OxTitle";
import { withRouter } from "react-router-dom";
import AcceptDialog from "../../layouts/OxAcceptDialog";
const UmaResourceList = props => {
  const items = [
    {
      icon: "add",
      text: "Resource",
      handle: goToUmaResourceAddPage
    },
    {
      icon: "list",
      text: "Uma Scopes",
      handle: goToUmaScopesPage
    }
  ];

  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  function goToUmaResourceDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/uma/scope/detail:` + row);
  }
  function goToUmaResourceEditPage(row) {
    const { history } = props;
    if (history) history.push(`/uma/scope/edit:` + row);
  }
  function goToUmaResourceAddPage() {
    const { history } = props;
    if (history) history.push("/uma/scope/add");
  }
  function goToUmaScopesPage() {
    const { history } = props;
    if (history) history.push("/uma/scopes");
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
          { title: "Name", field: "name" },
          { title: "Id", field: "id" },
          { title: "Scopes", field: "scopes" },
          { title: "Icon Uri", field: "uri" }
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
              goToUmaResourceDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit uma scope",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToUmaResourceEditPage(rowData.tableData.id);
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
export default withRouter(UmaResourceList);
