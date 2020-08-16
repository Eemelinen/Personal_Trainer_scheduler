import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import events from './mockEvents';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const TrainingCalendar = props => {
  const [ events, setEvents ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    console.log('Calender component mounted');
    console.log('Calender props', props);

    const parsedEvents = props.events.map(event => {
      return {
        'title': event.activity,
        'start': new Date(2020, 7, 20, 7, 0, 0),
        'end': new Date(2020, 7, 20, 10, 30, 0),
      }
    });

    setEvents(parsedEvents);
    setLoading(false);
  }, [props]);

  return(
    <div>
      {loading
        ?<h1>Loading</h1>
        : <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} />}
    </div>
  );
}


export default TrainingCalendar;