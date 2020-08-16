import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';

function AddCustomer(props) {
  const { addCustomer, setOpened } = props;
  return (
    <div>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          streetaddress: '',
          postcode: '',
          city: '',
          email: '',
          phone: '',
        }}

        validate={values => {
          const errors = {};

          if(!values.firstname) {
            errors.firstname = 'Firstname required'
          }
          if(!values.lastname) {
            errors.lastname = 'Lastname required'
          }
          if(!values.streetaddress) {
            errors.streetaddress = 'Address required'
          }
          if(!values.postcode) {
            errors.postcode = ' Postal code required'
          }
          if(!values.city) {
            errors.city = 'City required'
          }
          if (!values.email) {
            errors.email = 'Email required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if(!values.phone) {
            errors.phone = 'Phone number required'
          }
          return errors;
        }}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('Add customer onSubmit runs');
          addCustomer(values);
          setOpened(false);
          setSubmitting(false);
          resetForm();
        }}>

        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup className="form-group col-md-3 addForm-margin">
              <FormLabel>Firstname:</FormLabel>
              <FormControl
                type="text"
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              {errors.firstname}
              <br/>
              <FormLabel>Lastname: </FormLabel>
              <FormControl
                type="text"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
              {errors.lastname}
              <br/>
              <FormLabel>Street address:</FormLabel>
              <FormControl
                type="text"
                name="streetaddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.streetaddress}
              />
              {errors.streetaddress}
              <br/>
              <FormLabel>Postal code:</FormLabel>
              <FormControl
                type="text"
                name="postcode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postcode}
              />
              {errors.postcode}
              <br/>
              <FormLabel>City:</FormLabel>
              <FormControl
                type="text"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              {errors.city}
              <br/>
              <FormLabel>Email:</FormLabel>
              <FormControl
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}

              <br/>
              <FormLabel>Phone:</FormLabel>
              <FormControl
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone}
              <br/>

              <Button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                Save New Customer
              </Button>
            </FormGroup>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddCustomer;
