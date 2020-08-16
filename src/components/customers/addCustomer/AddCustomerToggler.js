import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Collapse } from 'react-collapse';
import AddCustomer from './AddCustomer';

function AddCustomerToggler(props) {
  const [ isOpened, setOpened ] = useState(false);

    return (
      <div>
        <Button
          className="input"
          onClick={() => {
            if(isOpened) {
              setOpened(false)
            } else {
              setOpened(true)
            }
          }}>
          Add Customer
        </Button>
        <Collapse isOpened={isOpened}>
          <AddCustomer addCustomer={props.addCustomer} setOpened={setOpened} />
        </Collapse>
      </div>
    );
}

export default AddCustomerToggler;