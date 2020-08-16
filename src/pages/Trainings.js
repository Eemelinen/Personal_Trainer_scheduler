import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainingList from '../components/trainings/trainingList/TrainingList';
import AddTrainingToggler from '../components/trainings/addTraining/AddTrainingToggler';

function Training() {
  const [ trainings, setTrainings ] = useState([]);

  useEffect(() => {
    getTrainings();
  }, []);

  useEffect(() => {
  }, [trainings]);

  const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(res => res.json())
      .then(data => {
        setTrainings(data);
      })
      .catch(err => console.log(err))
  }

  const saveTraining = details => {
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
        customer: details.customer,
      }
    })
    .then(res => {
      getTrainings();
      return res;
    })
    .catch(err => console.log(err))
  }

  const deleteTraining = data => {
    const id = data.original.id;
    if(window.confirm('Do you really want to delete this training?')) {
      axios.delete(`https://customerrest.herokuapp.com/api/trainings/${id}`)
        .then(response => {
          getTrainings();
        })
        .catch(error => console.log(error));
    }
  }

  return (
    <div className="training">
      <h1 className='pageHeader'>Upcoming Trainings</h1>
      <AddTrainingToggler saveTraining={saveTraining}/>
      <TrainingList trainings={trainings} deleteTraining={deleteTraining} />
    </div>
  );
}

export default Training;