import React,{ useEffect, useState } from 'react';
import TrainingCalender from '../components/calender/TrainingCalender';

const Calendar = () => {
  const [ trainings, setTrainings ] = useState([]);

  useEffect(() => {
    const getTrainings = () => {
      fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(data => {
          setTrainings(data);
        })
        .catch(err => console.log(err))
    }
    getTrainings();
  }, []);

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