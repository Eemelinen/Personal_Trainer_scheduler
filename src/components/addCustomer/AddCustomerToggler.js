import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import AddCustomer from './AddCustomer';

function AddCustomerToggler(props) {
  const [ isOpened, setOpened ] = useState(false);

    return (
      <div>
        <button
          className="input"
          onClick={() => {
            if(isOpened) {
              setOpened(false)
            } else {
              setOpened(true)
            }
          }}>
          Add Customer
        </button>
        <Collapse isOpened={isOpened}>
          <AddCustomer />
        </Collapse>
      </div>
    );
}

export default AddCustomerToggler;