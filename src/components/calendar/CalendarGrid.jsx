
import React from "react";
import Day from "./Day";
import { Card } from "../ui/card";

const CalendarGrid = ({ currentMonth, onSelectDay, events, selectedDay }) => {
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const prevMonthDays = Array.from({ length: startDay }, (_, i) => i + 1);
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const days = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    days.push(date);
  }

  const dayName = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="grid grid-cols-7 gap-0.5 sm:gap-4 ">
      {dayName.map((day, index) => (
        <Card
          className={` p-3 md:p-4 bg-zinc-200 text-xs md:text-2xl font-semibold text-center ${
            (index == 0 || index == 6) &&
            " bg-zinc-600 md:font-bold text-zinc-50"
          } `}
          key={index}
        >
          {day}
        </Card>
      ))}
      {prevMonthDays.map((_, index) => (
        <span key={index}></span>
      ))}
      {days.map((day, index) => (
        <Day
          key={index}
          day={day}
          onSelectDay={onSelectDay}
          events={events}
          selectedDay={selectedDay}
        />
      ))}
    </div>
  );
};

export default CalendarGrid;
