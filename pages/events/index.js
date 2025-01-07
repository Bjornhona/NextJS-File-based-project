import EventList from '../../components/events/EventList';
import {getAllEvents} from '../../helpers/api-util';
import EventsSearch from '../../components/events/EventsSearch';
import {useRouter} from 'next/router';

const EventsPage = ({events}) => {
  const router = useRouter();

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

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60
  }
}

export default EventsPage;
