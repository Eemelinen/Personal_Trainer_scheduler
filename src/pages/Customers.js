import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCustomerToggler from '../components/addCustomer/AddCustomerToggler';
import CustomerList from '../components/customerList/CustomerList';

function Customers() {
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

    const deleteCustomer = data => {
      const link = data.row._original.links[0].href;
      axios.delete(link)
        .then(response => {
          getCustomers();
          console.log(response);
        })
        .catch(error => console.log(error));
  };

  return (
    <div className="customers">
      <h1>Customers</h1>
      <AddCustomerToggler />
      <CustomerList customers={customers} deleteCustomer={deleteCustomer}/>
    </div>
  );
}

export default Customers;