import Link from 'next/link';
import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <h4>Featured events</h4>
      <EventList events={featuredEvents} />
      <Link href={'/events'}>See all events</Link>
    </div>
  )
}

export default HomePage;
