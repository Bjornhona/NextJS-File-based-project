import { useRouter } from 'next/router';

const EventItemPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  // Get the event data from the DUMMY_EVENT data for the event with the given eventId.

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>Event Item Page</h1>
      <p>This is the Event Item Page.</p>
      <button onClick={handleGoBack}>Back</button>
    </div>
  )
}

export default EventItemPage;
