import EventList from '../../components/events/EventList';
import {getAllEvents} from '../../dummy-data';
import EventsSearch from '../../components/events/EventsSearch';
import {useRouter} from 'next/router';

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const handleEventList = (year, month) => {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <section>
      <h1>All Events</h1>
      <EventsSearch onSearch={handleEventList} />
      <EventList events={events} />
    </section>
  )
}

export default EventsPage;
