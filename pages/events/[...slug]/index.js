import {useRouter} from 'next/router';
import Link from 'next/link';

const SearchEventsPage = () => {
  const router = useRouter();
  const { query } = router;

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

  return (
    <div>
      <h1>Search Events Page</h1>
      <p>This is the Search Events Page.</p>
      {/* <form>
        <input type="submit" value="Search" name="searchYear"/>
      </form> */}
      <Link href={'events/2022'}>2022</Link>
      <h4>Filtered events</h4>
      <ul>
        <li>Event Item 1</li>
        <li>Event Item 2</li>
        <li>Event Item 3</li>
      </ul>
    </div>
  )
}

export default SearchEventsPage;
