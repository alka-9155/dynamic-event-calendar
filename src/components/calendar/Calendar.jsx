// src/components/calendar/Calendar.jsx

import React, { useState, useEffect } from "react";
import Header from "./Header";
import CalendarGrid from "./CalendarGrid";
import EventList from "../event/EventList";
import { testEvents } from "@/assets/Help";
import { loadEventsFromStorage } from "../utils/localStorage";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(loadEventsFromStorage(currentMonth));
  }, [currentMonth]);

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, event];
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  const deleteEvent = (eventId) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.filter((event) => event.id !== eventId);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  return (
    <div className=" px-1 py-4 sm:p-4 flex w-full h-full flex-col xl:flex-row lg:justify-around ">
      
        <div className="xl:w-[55%]">
          <Header
            currentMonth={currentMonth}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />

          <CalendarGrid
            currentMonth={currentMonth}
            onSelectDay={handleSelectDay}
            events={events}
            selectedDay={selectedDay}
          />
        </div>

        <EventList
          events={events}
          selectedDay={selectedDay}
          onAddEvent={addEvent}
          onEdit={updateEvent}
          onDeleteEvent={deleteEvent}
          onDelete={deleteEvent}
        />
      
    </div>
  );
};

export default Calendar;
