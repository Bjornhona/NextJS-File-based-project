import EventList from '../../components/events/EventList';
import {getAllEvents} from '../../dummy-data';

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <h1>Events Page</h1>
      <p>This is the Events Page.</p>
      <h4>All events</h4>
      <EventList events={events} />
    </div>
  )
}

export default EventsPage;
