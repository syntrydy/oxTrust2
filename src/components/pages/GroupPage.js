import React from 'react'
import MaterialTable from 'material-table'

const GroupPage = () => {
    return (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            title="Multiple Actions Preview"
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'SurName', field: 'surname' },
              { title: 'birthYear', field: 'birthYear', type: 'numeric' },
              { title: 'birthCity', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            options={{
                actionsColumnIndex: -1
              }}
            actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',
                  onClick: (event, rowData) => alert("You saved " + rowData.name)
                },
                {
                  icon: 'delete',
                  tooltip: 'Delete User',
                  onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                }
              ]}
            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          />
        </div>
      )
    }

export default GroupPage
