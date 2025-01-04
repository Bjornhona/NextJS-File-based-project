import {useRouter} from 'next/router';

const EventsPage = () => {
  const router = useRouter();

  const DUMMY_EVENTS = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description for Event 1',
      date: '2022-01-01',
      location: 'Location 1',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description for Event 2',
      date: '2022-02-01',
      location: 'Location 2',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'Description for Event 3',
      date: '2022-03-01',
      location: 'Location 3',
    }
  ];

  const handleShowEventItem = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <div>
      <h1>Events Page</h1>
      <p>This is the Events Page.</p>
      <h4>All events</h4>
      <ul>
        {DUMMY_EVENTS.map(event => <li key={event.id}>
            <div onClick={() => handleShowEventItem(event.id)}>
              <h5>{event.title}</h5>
            </div>
          </li>)}
      </ul>
    </div>
  )
}

export default EventsPage;
