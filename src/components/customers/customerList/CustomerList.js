import React from 'react';
import ReactTable from 'react-table';
import EditCustomer from '../editCustomer/EditCustomer';
import Button from '@material-ui/core/Button';
import 'react-table/react-table.css';

function CustomerList(props) {
  const { customers, deleteCustomer } = props;

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
    },
    {
      sortable: false,
      filterable: false,
      width: 100,
      Cell: row => < EditCustomer customer={row.original} getCustomers={props.getCustomers} />
    },
    {
      sortable: false,
      filterable: false,
      width: 100,
      Cell: row => <Button onClick={() => deleteCustomer(row)}>Delete</Button>
    },
  ];

  return (
    <div className="tableList">
      <ReactTable data={customers} columns={columns} filterable={true} />
    </div>
  );
}

export default CustomerList;