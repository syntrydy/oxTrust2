import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AcceptDialog from "../../layouts/OxAcceptDialog";
const OpenIdClientList = props => {
  const items = [
    {
      icon: "add",
      text: "Client",
      handle: goToClientAddPage
    },
    {
      icon: "add",
      text: "Scope",
      handle: goToScopeAddPage
    },
    {
      icon: "add",
      text: "Sector",
      handle: goToSectorAddPage
    },
    {
      icon: "list",
      text: "Scopes",
      handle: goToScopesPage
    },
    {
      icon: "list",
      text: "Sectors",
      handle: goToSectorsPage
    }
  ];

  const classes = makeStyles({
    colorSecondary: {
      background: "#8b0000"
    }
  });
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
  };
  function goToClientDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/openid/client/detail:` + row);
  }
  function goToClientEditPage(row) {
    const { history } = props;
    if (history) history.push(`/openid/client/edit:` + row);
  }
  function goToScopesPage() {
    const { history } = props;
    if (history) history.push("/openid/scopes");
  }
  function goToSectorsPage() {
    const { history } = props;
    if (history) history.push("/openid/sectors");
  }
  function goToClientAddPage() {
    const { history } = props;
    if (history) history.push("/openid/client/add");
  }
  function goToScopeAddPage() {
    const { history } = props;
    if (history) history.push("/openid/scope/add");
  }
  function goToSectorAddPage() {
    const { history } = props;
    if (history) history.push("/openid/sector/add");
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
            onClick: (event, rowData) => {goToClientEditPage(rowData.tableData.id)}
          },
          {
            icon: "delete",
            tooltip: "Delete Client",
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
export default withRouter(OpenIdClientList);
