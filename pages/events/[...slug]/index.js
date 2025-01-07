import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
// import { getFilteredEvents } from '../../../helpers/api-util';
import EventList from '../../../components/events/EventList';
import ResultsTitle from '../../../components/events/ResultsTitle';
import Button from '../../../components/ui/Button';
import ErrorAlert from '../../../components/ui/ErrorAlert';
import useSWR from 'swr';

const SearchEventsPage = () => {
  // const { dateNum, filteredEvents, hasError } = props;
  const [events, setEvents] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR('https://nextjs-data-fetching-71604-default-rtdb.europe-west1.firebasedatabase.app/events.json');

  useEffect(() => {
    if (data) {
      const readableEvents = [];
      for (const key in events) {
        readableEvents.push({...events[key], id: key });
      }
      setEvents(readableEvents);
    }
  }, [data]);

  if (!events) {
    return (
      <p className={'center'}>Loading...</p>
    )
  }

  const filteredYear = slug[0];
  const filteredMonth = slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // if (hasError) {
  if (isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numYear > 2030 || numMonth < 1 || numMonth > 12 || error) {
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

    // const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });
  const filteredEvents = events?.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  const date = new Date(numYear, numMonth - 1);

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

// export const getServerSideProps = async ({ params }) => {
//   const { slug } = params;

//   const filteredYear = slug[0];
//   const filteredMonth = slug[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
//     return {
//       props: { hasError: true }
//       // redirect: {
//       //   destination: '/error'
//       // },
//       // notFound: true
//     }
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       filteredEvents,
//       hasError: false,
//       dateNum: {
//         year: numYear,
//         month: numMonth
//       }
//     }
//   }
// }

export default SearchEventsPage;
