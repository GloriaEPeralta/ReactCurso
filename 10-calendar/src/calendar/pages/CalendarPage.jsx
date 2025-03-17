import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours} from 'date-fns';  // Importamos la función addHours
import { Navbar } from "../";

import { localizer,getMessagesES } from '../../helpers';




const events = [{
  title: 'Cumpleaños Dra Lucía',
  notes: 'Hay que adornar',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa', 
  user: {
    _id: '123',
    name: 'Fernando'
  } 
}];

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => { 
      console.log(event, start, end, isSelected); 
      const style = {
          backgroundColor: '#367CF7',
          borderRadius: '0px',
          opacity: 0.8,
          display: 'block',
          color: 'white'
      }   
      return {
          style
      };  
  }

  return (
    <>
      <Navbar />
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      messages={getMessagesES()}
      eventPropGetter={ eventStyleGetter }    
    />
     
    </ >

    
   
  )
}
