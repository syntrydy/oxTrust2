import React, { useState } from "react";
import MaterialTable from "material-table";
import OxTitle from "../layouts/OxTitle";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const items = [
  {
    text: "add user to group",
    icon: "add"
  }
];

const GroupUsers = props => {
  const classes = makeStyles({
    colorSecondary: {
      background: "#8b0000"
    }
  });
  const [selection, setSelection] = useState(null);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={<OxTitle items={items} />}
        columns={[
          { title: "UserName", field: "username" },
          { title: "Email", field: "email" },
          {
            title: "Status",
            field: "status",
            render: rowData => (
              <Chip
                classes={{ colorSecondary: classes.colorSecondary }}
                color={rowData.status === "active" ? "primary" : "inherit"}
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
            icon: "delete",
            tooltip: "Remove from this Group",
            iconProps: { color: "error" },
            onClick: (event, rowData) =>
              alert("You want to remove " + rowData.username)
          }
        ]}
        data={props.data}
        onRowClick={(evt, row) => setSelection(row)}
      />
    </div>
  );
};
export default withRouter(GroupUsers);
