import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then(res => res.json())
      .then(data => setTrainings(data.content))
      .catch(err => console.log(err))
  }

  const columns = [
    {
      Header: 'Data',
      accessor: 'date',
    },
    {
      Header: 'Duration',
      accessor: 'duration',
    },
    {
      Header: 'Activity',
      accessor: 'activity',
    },
    {
      Header: 'Customer',
      accessor: 'customer',
    }
  ];

  return (
    <div className="customerList">

      <ReactTable data={trainings} columns={columns} filterable={true}/>

    </div>
  );
}

export default CustomerList;