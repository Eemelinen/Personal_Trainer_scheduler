import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function CustomerList() {

  const [ customers, setCustomers ] = useState([]);

  useEffect(() => {
    console.log('CustomerList loaded');
    getCustomers();
  }, []);

  const getCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
      .then(res => res.json())
      .then(data => setCustomers(data.content))
      .catch(err => console.log(err))
  }

  const columns = [
    {
      Header: 'Firstname',
      accessor: 'firstname',
    },
    {
      Header: 'Lastname',
      accessor: 'lastname',
    },
    {
      Header: 'Street',
      accessor: 'streetaddress',
    },
    {
      Header: 'Postal Code',
      accessor: 'postcode',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
    }
  ];

  return (
    <div className="customerList">

      <ReactTable data={customers} columns={columns} filterable={true}/>

    </div>
  );
}

export default CustomerList;