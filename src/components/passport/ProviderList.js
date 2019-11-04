import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import { withRouter } from "react-router-dom";
import AcceptDialog from "../layouts/OxAcceptDialog";
const ProviderList = props => {
  const items = [
    {
      icon: "add",
      text: "Provider",
      handle: goToPassportAddPage
    },
    {
      icon: "settings",
      text: "Configuration",
      handle: goToPassportConfigPage
    },
    {
      icon: "forward",
      text: "IDP Initiated Flow",
      handle: goToIdpFlowConfigPage
    }
  ];
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
  };
  function goToPassportEditPage(row) {
    const { history } = props;
    if (history) history.push(`/passport/provider/edit:` + row);
  }
  function goToPassportAddPage() {
    const { history } = props;
    if (history) history.push("/passport/provider/add");
  }
  function goToPassportConfigPage() {
    const { history } = props;
    if (history) history.push("/passport/config");
  }
  function goToIdpFlowConfigPage(row) {
    const { history } = props;
    if (history) history.push("/passport/idpconfig");
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
          { title: "Provider Id", field: "id" },
          { title: "Display Name", field: "displayname" },
          { title: "Strategy", field: "strategy" },
          { title: "Type", field: "type" }
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
            tooltip: "Edit provider",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToPassportEditPage(rowData.inum);
            }
          },
          {
            icon: "delete",
            tooltip: "Delete propvider",
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
export default withRouter(ProviderList);
