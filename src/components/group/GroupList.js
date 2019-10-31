import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
const GroupList = props => {
  const items = [
    {
      icon: "add",
      text: "group",
      handle: goToGroupAddPage
    },
    {
      icon: "add",
      text: "user"
    },
    {
      icon: "list",
      text: "Users",
      handle: goToUsersPage
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

  function goToGroupDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/group/detail:` + row);
  }
  function PaperComponent(props) {
    return (
      <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }
  function goToUsersPage() {
    const { history } = props;
    if (history) history.push("/users");
  }
  function goToGroupAddPage() {
    const { history } = props;
    if (history) history.push("/group/add");
  }
  function showDialogBox(name) {
    console.log("==================: " + name);
    setRow(name);
    setOpen(true);
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "Name", field: "name" },
          { title: "Description", field: "description" },
          { title: "#Members", field: "members", type: "numeric" },
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
            tooltip: "Show Group detail",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToGroupDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit Group",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: "delete",
            tooltip: "Delete Group",
            iconProps: { color: "error" },
            onClick: (event, rowData) => {
              showDialogBox(rowData.name);
            }
          }
        ]}
        data={props.data}
        onRowClick={(evt, row) => setSelection(row)}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Deletion Confirmation Dialog
          <Divider />
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Do you really want to delete {row}?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default withRouter(GroupList);
