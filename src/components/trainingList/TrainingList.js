import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

function CustomerList() {

  const [ trainings, setTrainings ] = useState([]);

  useEffect(() => {
    console.log('Training list loaded');
    getTrainings();
  }, []);

  useEffect(() => {
    console.log(trainings);
  }, [trainings]);

  const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(res => res.json())
      .then(data => setTrainings(data))
      .catch(err => console.log(err))
  }

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
      accessor: c => `${c.customer.firstname} ${c.customer.lastname}`,
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

export default CustomerList;