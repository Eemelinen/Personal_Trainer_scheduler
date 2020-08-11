import React, { useState, useEffect } from 'react';

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

  return (
    <div className="customerList">
      <ul>
        {customers
          ? customers.map((customer, i) => {
            return <li key={i}>{customer.firstname}</li>
          })
          : <h1>no customers</h1>}
      </ul>
    </div>
  );
}

export default CustomerList;