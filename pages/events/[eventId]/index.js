import EventSummary from '../../../components/event-detail/EventSummary';
import EventLogistics from '../../../components/event-detail/EventLogistics';
import EventContent from '../../../components/event-detail/EventContent';
import { getEventById, getFeaturedEvents } from '../../../helpers/api-util';
import Head from 'next/head';

const EventItemPage = (props) => {
  const {event} = props;

  if (!event) {
    return (
      <div className={'center'}>
        <p>Loading...</p>
      </div>
    )

  }
  const {title, description, location, date, image} = event;

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={title} />
      <EventLogistics 
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { eventId } = params;
  const event = await getEventById(eventId);
  return {
    props: {
      event,
    },
    revalidate: 30
  }
}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export default EventItemPage;
