import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';

function AddTraining(props) {
  const { saveTraining, setOpened } = props;
  return (
    <div>
      <Formik
        initialValues={{
          date: '2020-08-23T17:29:51+02:00',
          duration: '',
          activity: '',
          customer: 'https://customerrest.herokuapp.com/api/customers/10',
        }}

        validate={values => {
          const errors = {};
          if(!values.date) {
            errors.date = 'Date required'
          }
          if(!values.duration) {
            errors.duration = 'Workout duration required'
          }
          if(!values.activity) {
            errors.activity = 'Activity required'
          }
          if(!values.customer) {
            errors.customer = 'Customer required'
          }
          return errors;
        }}

        onSubmit={ async (values, { setSubmitting, resetForm }) => {
          saveTraining(values);
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
              <FormLabel>Date and time:</FormLabel>
              <FormControl
                type="text"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              {errors.date}
              <br/>
              <FormLabel>Duration: </FormLabel>
              <FormControl
                type="text"
                name="duration"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.duration}
              />
              {errors.duration}
              <br/>
              <FormLabel>Activity:</FormLabel>
              <FormControl
                type="text"
                name="activity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.activity}
              />
              {errors.activity}
              <br/>
              <FormLabel>Customer:</FormLabel>
              <FormControl
                type="text"
                name="customer"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.customer}
              />
              {errors.customer}
              < br />

              <Button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                Save New Training
              </Button>
            </FormGroup>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddTraining;
