import {useRouter} from 'next/router';
import { getFilteredEvents } from '../../../dummy-data';
import EventList from '../../../components/events/EventList';
import ResultsTitle from '../../../components/events/ResultsTitle';
import Button from '../../../components/ui/Button';
import ErrorAlert from '../../../components/ui/ErrorAlert';

const SearchEventsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <p className={'center'}>Loading...</p>
    )
  }

  const filteredYear = slug[0];
  const filteredMonth = slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  const date = new Date(numYear, numMonth - 1);

  if (isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return (
      <>
        <ErrorAlert>
          <p className={'center'}>Invalid year or month. Please adjust your values!</p>
        </ErrorAlert>
        <div className={'center'}>
          <Button link={'/events'}>Show all events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ResultsTitle date={date} />
        <ErrorAlert>
          <p className={'center'}>No events found for the selected year and month.</p>
        </ErrorAlert>
        <div className={'center'}>
          <Button link={'/events'}>Show all events</Button>
        </div>
      </>
    )
  }  

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export default SearchEventsPage;
