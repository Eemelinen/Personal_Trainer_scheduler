import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

const EditCustomer = props => {
  const { customer, getCustomers } = props;
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({
    firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
  })

  const handleClickOpen = () => {
    console.log(customer);
    setDetails({
      firstname: customer.firstname,
      lastname: customer.lastname,
      streetaddress: customer.streetaddress,
      postcode: customer.postcode,
      city: customer.city,
      email: customer.email,
      phone: customer.phone
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  }

  const updateCustomer = () => {
    axios({
      method: 'put',
      url: customer.links[0].href,
      data: details
    })
    .then(res => {
      handleClose();
      return res;
    })
    .then(() => getCustomers())
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Button email="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit customer</DialogTitle>
        <DialogContent>

          <TextField
            margin="dense"
            name='firstname'
            label="firstname"
            value={details.firstname}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='lastname'
            label="lastname"
            value={details.lastname}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='email'
            label="email"
            value={details.email}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='streetaddress'
            label="streetaddress"
            value={details.streetaddress}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='postcode'
            label="postcode"
            value={details.postcode}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='city'
            label="city"
            value={details.city}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='email'
            label="email"
            value={details.email}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='phone'
            label="phone"
            value={details.phone}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} email="primary">
            Cancel
          </Button>
          <Button onClick={updateCustomer} email="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditCustomer;