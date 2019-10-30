import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const GroupList = props => {
  const items = [
    {
      icon: "add",
      text: "group",
      handle:goToGroupAddPage
    },
    {
      icon: "add",
      text: "user"
    },
    {
      icon: "list",
      text: "Users",
      handle:goToUsersPage
    }
  ];

  const classes = makeStyles({
    colorSecondary: {
      background: "#8b0000"
    }
  });
  const [selection, setSelection] = useState(null);
  function goToGroupDetailPage(row) {
    const { history } = props;
    if (history) history.push(`/group/detail:` + row);
  }
  function goToUsersPage() {
    const { history } = props;
    if (history) history.push('/users');
  }
  function goToGroupAddPage() {
    const { history } = props;
    if (history) history.push('/group/add');
  }
  function showDialogBox(id) {
    console.log("=========== " + id);
    alert("Want to delete group with id "+id);
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
              showDialogBox(rowData.tableData.id);
            }
          }
        ]}
        data={[
          {
            name: "Administrators",
            description: " Group for administrators",
            members: 10,
            status: "active"
          },
          {
            name: "Managers",
            description: " Group for manager",
            members: 6,
            status: "inactive"
          },
          {
            name: "Guest",
            description: " Group for guests",
            members: 2,
            status: "active"
          },
          {
            name: "Guest",
            description: " Group for guests",
            members: 2,
            status: "active"
          },
          {
            name: "Guest",
            description: " Group for guests",
            members: 2,
            status: "active"
          },
          {
            name: "Guest",
            description: " Group for guests",
            members: 2,
            status: "active"
          }
        ]}
        onRowClick={(evt, row) => setSelection(row)}
      />
    </div>
  );
};
export default withRouter(GroupList);
