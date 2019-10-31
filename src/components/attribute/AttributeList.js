import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AcceptDialog from "../layouts/OxAcceptDialog";
const AttributeList = props => {
  const items = [
    {
      icon: "add",
      text: "Attribute",
      handle: goToAttributeAddPage
    }
  ];

  const classes = makeStyles({ colorSecondary: { background: "#8b0000" } });
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  function goToAttributeDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/attribute/detail:` + row);
  }
  function goToAttributeEditPage(row) {
    const { history } = props;
    if (history) history.push(`/attribute/edit:` + row);
  }
  function goToAttributeAddPage() {
    const { history } = props;
    if (history) history.push("/attribute/add");
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
          { title: "Origin", field: "origin" },
          { title: "DisplayName", field: "displayname" },
          { title: "Name", field: "name" },
          { title: "Description", field: "description" },
          {
            title: "Status",
            field: "status",
            render: rowData => (
              <Chip
                classes={{ colorSecondary: classes.colorSecondary }}
                color={rowData.status === "active" ? "primary" : "default"}
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
            tooltip: "Show attribute detail",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToAttributeDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit attribute",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToAttributeEditPage(rowData.tableData.id);
            }
          },
          {
            icon: "delete",
            tooltip: "Delete attribute",
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
export default withRouter(AttributeList);
