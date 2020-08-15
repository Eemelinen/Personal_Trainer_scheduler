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
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://customerrest.herokuapp.com/api/trainings',
      data: {
        date: details.date,
        activity: details.activity,
        duration: details.duration,
        customer: details.url,
        // customer: 'https://localhost:8080/api/customers/7'
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