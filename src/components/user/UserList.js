import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const UserList = props => {
  const items = [
    {
      icon: "add",
      text: "user"
    },
    {
      icon: "list",
      text: "Groups",
      handle: goToGroupsPage
    }
  ];

  const classes = makeStyles({
    colorSecondary: {
      background: "#8b0000"
    }
  });
  const [selection, setSelection] = useState(null);
  function goToUserDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/user/detail:` + row);
  }
  function goToGroupsPage() {
    const { history } = props;
    if (history) history.push("/groups");
  }
  function showDialogBox(id) {
    console.log("=========== " + id);
    alert("Want to delete group with id " + id);
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "Usernane", field: "username" },
          { title: "Display Name", field: "displayname" },
          { title: "Email", field: "email" },
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
            tooltip: "Show User detail",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => {
              goToUserDetailPage(rowData.tableData.id);
            }
          },
          {
            icon: "edit",
            tooltip: "Edit User",
            iconProps: { color: "primary" },
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: "delete",
            tooltip: "Delete User",
            iconProps: { color: "error" },
            onClick: (event, rowData) => {
              showDialogBox(rowData.tableData.id);
            }
          }
        ]}
        data={[
          {
            username: "William",
            displayname: "William",
            email: "William@mail.com",
            status: "active"
          },
          {
            username: "Mustafa",
            displayname: "Mustafa",
            email: "must@mail.com",
            status: "active"
          },
          {
            username: "Rolain",
            displayname: "Rolain",
            email: "rola@mail.com",
            status: "inactive"
          }
        ]}
        onRowClick={(evt, row) => setSelection(row)}
      />
    </div>
  );
};
export default withRouter(UserList);
