import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <section>
      <h1>Featured Events</h1>
      <EventList events={featuredEvents} />
    </section>
  )
}

export default HomePage;
