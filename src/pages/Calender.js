import React,{ useEffect, useState } from 'react';
import TrainingCalender from '../components/calender/TrainingCalender';

const Calendar = props => {
  const [ trainings, setTrainings ] = useState([]);

  useEffect(() => {
    // console.log('Training list loaded');
    getTrainings();
  }, []);

  useEffect(() => {
    // console.log(trainings);
  }, [trainings]);

  const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(res => res.json())
      .then(data => {
        setTrainings(data);
        // console.log(data);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Training Calender</h1>
      <div>
        <TrainingCalender events={trainings} />
      </div>
    </div>
  );
}

export default Calendar;