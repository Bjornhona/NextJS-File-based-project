import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <h4>Featured events</h4>
      <ul>
        <li>Event Item 1</li>
        <li>Event Item 2</li>
        <li>Event Item 3</li>
      </ul>
      <Link href={'/events'}>See all events</Link>
    </div>
  )
}

export default HomePage;
