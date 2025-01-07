// import {useRouter} from 'next/router';
import { getFilteredEvents } from '../../../helpers/api-util';
import EventList from '../../../components/events/EventList';
import ResultsTitle from '../../../components/events/ResultsTitle';
import Button from '../../../components/ui/Button';
import ErrorAlert from '../../../components/ui/ErrorAlert';
import Head from 'next/head';

const SearchEventsPage = (props) => {
  const { dateNum, filteredEvents, hasError } = props;
  // const router = useRouter();
  // const { slug } = router.query;

  // if (!slug) {
  //   return (
  //     <p className={'center'}>Loading...</p>
  //   )
  // }

  // const filteredYear = slug[0];
  // const filteredMonth = slug[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

    // const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });

  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`All events for ${dateNum.month}/${dateNum.year}.`} />
    </Head>
  )

  if (hasError) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p className={'center'}>Invalid year or month. Please adjust your values!</p>
        </ErrorAlert>
        <div className={'center'}>
          <Button link={'/events'}>Show all events</Button>
        </div>
      </>
    )
  }

  const date = new Date(dateNum.year, dateNum.month - 1);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
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
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  const filteredYear = slug[0];
  const filteredMonth = slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true }
      // redirect: {
      //   destination: '/error'
      // },
      // notFound: true
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      hasError: false,
      dateNum: {
        year: numYear,
        month: numMonth
      }
    }
  }
}

export default SearchEventsPage;
