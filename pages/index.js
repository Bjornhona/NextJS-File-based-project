import EventList from '../components/events/EventList';
import {getFeaturedEvents} from '../helpers/api-util';
import Head from 'next/head';

const HomePage = (props) => {
  const {featuredEvents} = props;

  return (
    <section>
      <Head>
        <title>Next.js - Event App</title>
        <meta name="description" content="A simple event app built with Next.js" />
      </Head>
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
