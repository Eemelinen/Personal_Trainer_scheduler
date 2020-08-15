import React from 'react';
import CustomerList from '../components/customerList/CustomerList';

function Customers() {
  return (
    <div className="customers">
      <h1>Customers</h1>
      <CustomerList />
    </div>
  );
}

export default Customers;