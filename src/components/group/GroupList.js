import React,{useState} from 'react'
import MaterialTable from "material-table";
import OxTitle from '../layouts/OxTitle';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const GroupList =()=> {

    const classes = makeStyles({
        colorSecondary: {
          background: '#8b0000'
        }
      });
      const [selection, setSelection] = useState(null);

      return (
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            title={<OxTitle/>}
            columns={[
              { title: "Name", field: "name" },
              { title: "Description", field: "description" },
              { title: "#Members", field: "members", type: "numeric" },
              { title: "Status", field: "status",render: rowData => <Chip classes={{colorSecondary:classes.colorSecondary}} color={rowData.status==='active' ? 'primary':'inherit' } label={rowData.status} /> }
            ]}
            options={{
              actionsColumnIndex: -1,
              selection: false,
              headerStyle: {
                backgroundColor: '#19857b',
                color: '#FFF',
                fontSize: '1.2em'
              },
              rowStyle: rowData => ({
                textAlign: "center",
                backgroundColor: (selection && selection.tableData.id === rowData.tableData.id) ? '#D8FBF8' : '#FFF'
              })
            }}
            actions={[
              {
                icon: "visibility",
                tooltip: "Show Group detail",
                iconProps: { color: "primary" },
                onClick: (event, rowData) =>
                  alert("You want to show detail of " + rowData.name)
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
                onClick: (event, rowData) =>
                  alert("You want to delete " + rowData.name)
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
            onRowClick={((evt, row) => setSelection(row))}
          />
        </div>
      );
    }
export default GroupList
