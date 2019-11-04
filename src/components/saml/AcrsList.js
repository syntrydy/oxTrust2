import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import { withRouter } from "react-router-dom";
import AcceptDialog from "../layouts/OxAcceptDialog";
const AcrsList = props => {
  const items = [
    {
      icon: "add",
      text: "ACR",
      handle: goToAcrAddPage
    },
    {
      icon: "list",
      text: "SAML Trusts",
      handle: goToTrustsPage
    }
  ];
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
  };
  function goToAcrEditPage(row) {
    const { history } = props;
    if (history) history.push(`/saml/acr/edit:` + row);
  }
  function goToAcrAddPage() {
    const { history } = props;
    if (history) history.push("/saml/acr/add");
  }
  function goToTrustsPage() {
    const { history } = props;
    if (history) history.push("/saml/trusts");
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
          { title: "Class Reference", field: "classReference" }
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
            icon: "edit",
            tooltip: "Edit acr",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToAcrEditPage(rowData.inum);
            }
          },
          {
            icon: "delete",
            tooltip: "Delete acr",
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
export default withRouter(AcrsList);
