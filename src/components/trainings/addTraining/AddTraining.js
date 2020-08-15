import React from 'react';
import { Formik } from 'formik';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';

function AddTraining(props) {
  const { saveTraining, setOpened } = props;
  return (
    <div>
      <h1>Add Training</h1>
      <Formik
        initialValues={{
          date: '',
          duration: '',
          activity: '',
          userID: 'https://localhost:8080/api/customers/7',
        }}

        validate={values => {
          const errors = {};
          if(!values.date) {
            errors.date = 'first name Required'
          }
          if(!values.duration) {
            errors.duration = 'last name Required'
          }
          if(!values.activity) {
            errors.activity = 'Activity Required'
          }
          if(!values.userID) {
            errors.userID = 'UserID Required'
          }
          return errors;
        }}

        onSubmit={ async (values, { setSubmitting, resetForm }) => {
          console.log('Add training onSubmit runs');

          // const getTrainingById = () => {
            
          // };

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
            <FormGroup className="form-group col-md-3">
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
              <FormLabel>Street address:</FormLabel>
              <FormControl
                type="text"
                name="activity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.activity}
              />
              {errors.activity}
              <br/>
              <FormLabel>userID:</FormLabel>
              <FormControl
                type="text"
                name="userID"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userID}
              />
              {errors.userID}
              < br />

              <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                Add Training
              </button>
            </FormGroup>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddTraining;
