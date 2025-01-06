import { useRouter } from 'next/router';
import { getEventById } from '../../../dummy-data';
import EventSummary from '../../../components/event-detail/EventSummary';
import EventLogistics from '../../../components/event-detail/EventLogistics';
import EventContent from '../../../components/event-detail/EventContent';

const EventItemPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found.</p>;
  }
  const {title, description, location, date, image} = event;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>Event Item Page</h1>
      <p>This is the Event Item Page.</p>
      <EventSummary title={title} />
      <EventLogistics 
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent><p>{description}</p></EventContent>
      <button onClick={handleGoBack}>Back</button>
    </div>
  )
}

export default EventItemPage;
