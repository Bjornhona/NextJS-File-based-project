export const getAllEvents = async () => {
  const response = await fetch('https://nextjs-data-fetching-71604-default-rtdb.europe-west1.firebasedatabase.app/events.json');
  const events = await response.json();
  const readableEvents = [];
  for (const key in events) {
    readableEvents.push({...events[key], id: key });
  }
  return readableEvents;
}

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  const featuredEvents = events.filter((event) => event.isFeatured);
  return featuredEvents;
}

export const getEventById = async (eventId) => {
  const events = await getAllEvents();
  const event = events.find((event) => event.id === eventId);
  return event;
}

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
