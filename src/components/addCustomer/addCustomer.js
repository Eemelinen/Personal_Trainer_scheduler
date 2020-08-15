import React from 'react';
import { Field, Form, Formik } from 'formik';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel'; 

function addCustomer(props) {

  const handleSubmit = () => {
    console.log('submitted')
  }

  return (
    <div>
      <h1>Add Customer</h1>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          street: '',
          postal: '',
          city: '',
          email: '',
          phone: '',
        }}

        validate={values => {
          const errors = {};

          if(!values.firstname) {
            errors.firstname = 'first name Required'
          }
          if(!values.lastname) {
            errors.lastname = 'last name Required'
          }
          if(!values.street) {
            errors.street = 'Required'
          }
          if(!values.postal) {
            errors.postal = 'Required'
          }
          if(!values.city) {
            errors.city = 'Required'
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if(!values.phone) {
            errors.phone = 'Required'
          }

          return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <FormGroup className="form-group col-md-3">
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
              <FormLabel>lastname: </FormLabel>
              <FormControl
                type="text"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
              {errors.lastname}
              <br/>
              <FormLabel>Street:</FormLabel>
              <FormControl
                type="text"
                name="street"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.street}
              />
              {errors.street}
              <br/>
              <FormLabel>Postal:</FormLabel>
              <FormControl
                type="text"
                name="postal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postal}
              />
              {errors.postal}
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

            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              Add Customer
            </button>
            </FormGroup>
          </form>
          
        )}
      </Formik>
    </div>
  );
}

export default addCustomer;
