import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainingList from '../components/trainings/trainingList/TrainingList';
import AddTrainingToggler from '../components/trainings/addTraining/AddTrainingToggler';

function Training() {
  const [ trainings, setTrainings ] = useState([]);

  useEffect(() => {
    console.log('Training list loaded');
    getTrainings();
  }, []);

  useEffect(() => {
    console.log(trainings);
  }, [trainings]);

  const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(res => res.json())
      .then(data => setTrainings(data))
      .catch(err => console.log(err))
  }

  const saveTraining = details => {
    console.log('DETAILS ', details)
    axios({
      method: 'post',
      url: 'https://customerrest.herokuapp.com/api/trainings',
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
      getTrainings();
      return res;
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="training">
      <h1>Trainings</h1>
      <AddTrainingToggler saveTraining={saveTraining}/>
      <TrainingList trainings={trainings} />
    </div>
  );
}

export default Training;