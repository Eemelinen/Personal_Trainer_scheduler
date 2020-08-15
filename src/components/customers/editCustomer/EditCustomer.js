import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

const EditCustomer = props => {
  
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
    firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
  })

  const handleClickOpen = () => {
    console.log(props.customer);
    setCustomer({
      firstname: props.customer.firstname,
      lastname: props.customer.lastname,
      streetaddress: props.customer.streetaddress,
      postcode: props.customer.postcode,
      city: props.customer.city,
      email: props.customer.email,
      phone: props.customer.phone
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    })
  }

  const updateCustomer = () => {
    axios({
      method: 'put',
      url: props.customer.links[0].href,
      data: customer
    })
    .then(res => {
      handleClose();
      return res;
    })
    .then(res => console.log(res))
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
            value={customer.firstname}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='lastname'
            label="lastname"
            value={customer.lastname}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='email'
            label="email"
            value={customer.email}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='streetaddress'
            label="streetaddress"
            value={customer.streetaddress}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='postcode'
            label="postcode"
            value={customer.postcode}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='city'
            label="city"
            value={customer.city}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='email'
            label="email"
            value={customer.email}
            onChange={e => handleInputChange(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name='phone'
            label="phone"
            value={customer.phone}
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