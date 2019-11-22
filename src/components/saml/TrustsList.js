import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AcceptDialog from "../../layouts/OxAcceptDialog";
const TrustsList = props => {
  const items = [
    {
      icon: "add",
      text: "Trust",
      handle:goToTrustAddPage
    },
    {
      icon: "add",
      text: "ACR",
      handle:goToAcrAddPage
    },
    {
      icon: "list",
      text: "ACRS",
      handle:goToAcrsPage
    },
    {
      icon: "list",
      text: "NameIds",
      handle:goToNameIdsPage
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
  function goToTrustDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/saml/trust/detail:` + row);
  }
  function goToTrustEditPage(row) {
    const { history } = props;
    if (history) history.push(`/saml/trust/edit:` + row);
  }
  function goToTrustAddPage() {
    const { history } = props;
    if (history) history.push('/saml/trust/add');
  }
  function goToAcrAddPage() {
    const { history } = props;
    if (history) history.push('/saml/acr/add');
  }
  function goToAcrsPage() {
    const { history } = props;
    if (history) history.push('/saml/acrs');
  }
  function goToNameIdsPage() {
    const { history } = props;
    if (history) history.push('/saml/nameids');
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
            onClick: (event, rowData) => {goToTrustEditPage(rowData.inum)}
          },
          {
            icon: "delete",
            tooltip: "Delete trust",
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
export default withRouter(TrustsList);
