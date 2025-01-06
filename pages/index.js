import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events</h1>
      <EventList events={featuredEvents} />
    </div>
  )
}

export default HomePage;
