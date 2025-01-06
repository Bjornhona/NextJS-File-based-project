import { useRouter } from 'next/router';
import { getEventById } from '../../../dummy-data';
import EventSummary from '../../../components/event-detail/EventSummary';
import EventLogistics from '../../../components/event-detail/EventLogistics';
import EventContent from '../../../components/event-detail/EventContent';
import ErrorAlert from '../../../components/ui/ErrorAlert';
import Button from '../../../components/ui/Button';

const EventItemPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found.</p>
      </ErrorAlert>
    )

  }
  const {title, description, location, date, image} = event;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics 
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
        <Button onClick={handleGoBack}>Back</Button>
      </EventContent>
    </>
  )
}

export default EventItemPage;
