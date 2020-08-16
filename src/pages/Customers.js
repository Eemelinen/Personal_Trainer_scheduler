import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCustomerToggler from '../components/customers/addCustomer/AddCustomerToggler';
import CustomerList from '../components/customers/customerList/CustomerList';

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

  const addCustomer = details => {
    console.log('DETAILS ', details)
    axios({
      method: 'post',
      url: 'https://customerrest.herokuapp.com/api/customers',
      data: {
        firstname: details.firstname,
        lastname: details.lastname,
        streetaddress: details.streetaddress,
        postcode: details.postcode,
        city: details.city,
        email: details.email,
        phone: details.phone,
      }
    })
    .then(res => {
      getCustomers();
      return res;
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

    const deleteCustomer = data => {
      const link = data.row._original.links[0].href;
      if(window.confirm('Do you really want to delete this user? All the trainings by this user will be deleted as well.')) {
        axios.delete(link)
          .then(response => {
            getCustomers();
            console.log(response);
          })
          .catch(error => console.log(error));
      }
    }

  return (
    <div className="customers">
      <h1>Customers</h1>
      <AddCustomerToggler addCustomer={addCustomer}/>
      <CustomerList customers={customers} deleteCustomer={deleteCustomer}/>
    </div>
  );
}

export default Customers;