import EventList from '../components/events/EventList';
import {getFeaturedEvents} from '../helpers/api-util';

const HomePage = (props) => {
  const {featuredEvents} = props;

  return (
    <section>
      <h1>Featured Events</h1>
      <EventList events={featuredEvents} />
    </section>
  )
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800
  }
}

export default HomePage;
