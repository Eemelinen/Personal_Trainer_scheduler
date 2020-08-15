import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

function TrainingList(props) {
  const { trainings } = props;

  const columns = [
    {
      Header: 'Activity',
      accessor: 'activity',
    },
    {
      Header: 'Duration (min)',
      accessor: 'duration',
    },
    {
      Header: 'Customer name',
      id: 'firstname_lastname',
      accessor: c => {
        console.log('ACCESSOR ', c)
        if( c.customer !== null) {
          return `${c.customer.firstname} ${c.customer.lastname}`
        } else {
          return 'Lisa Ahlstrom'
        }
      }
    },
    {
      Header: 'Date and time',
      id: 'time',
      accessor: t => moment(t.date).format('LLL')
    },
  ];

  return (
    <div className="customerList">
      <ReactTable data={trainings} columns={columns} filterable={true}/>
    </div>
  );
}

export default TrainingList;