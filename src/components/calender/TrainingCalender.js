import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

const TrainingCalendar = props => {
  const [ events, setEvents ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const parsedEvents = props.events.map(event => {
    const dateAndTime = moment(event.date).format();

    return {
      'title': event.activity,
      'start': new Date(
        moment(dateAndTime).year(),
        moment(dateAndTime).month(),
        moment(dateAndTime).date(),
        moment(dateAndTime).hour(),
        moment(dateAndTime).minute(),
        0),
      'end': new Date(
        moment(dateAndTime).year(),
        moment(dateAndTime).month(),
        moment(dateAndTime).date(),
        moment(dateAndTime).hour(),
        moment(dateAndTime).minute() + event.duration,
        0),
      }
    });

    setEvents(parsedEvents);
    setLoading(false);
  }, [props]);

  return(
    <div>
      {loading
        ?<h1>Loading trainings...</h1>
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