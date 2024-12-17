// src/utils/localStorage.js

export const loadEventsFromStorage = (currentMonth) => {
  const storedEvents = localStorage.getItem("events");
  const events = storedEvents ? JSON.parse(storedEvents).map(event => {
    const updatedDate = new Date(event.date);
    return ({...event, date : updatedDate });
  } ) : [];
  return events.filter((event) => {
    const eventMonth = new Date(event.date).getMonth();
    return eventMonth === currentMonth.getMonth();
  });
};
