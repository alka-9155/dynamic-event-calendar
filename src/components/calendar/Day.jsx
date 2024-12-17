// src/components/calendar/Day.jsx

import React, { useState } from "react";
import { Card } from "../ui/card";

const Day = ({ day, onSelectDay, events, selectedDay }) => {
  const isToday = new Date().toDateString() === day.toDateString();
  const dayEvents = events.filter(
    (event) => new Date(event.date).toDateString() === day.toDateString()
  );
  let isWeekend = false;
  if (day.getDay() == 0 || day.getDay() == 6) isWeekend = true;

  return (
    <Card
      onClick={() => onSelectDay(day)}
      className={`sm:p-2 sm:py-3 lg:p-4 flex flex-col items-center mt-2 justify-center cursor-pointer ${
        isToday ? "bg-blue-200" : ""
      } ${isWeekend && "bg-zinc-300"} ${
        dayEvents.length > 0 ? "" : "sm:py-5 py-6"
      } ${selectedDay.getDate() == day.getDate() && "bg-green-200"}`}
    >
      <span className="block">{day.getDate()}</span>
      {dayEvents.length > 0 && (
        <>
          <span className="text-xs sm:hidden flex items-center justify-around text-nowrap w-[90%] text-center sm:text-sm">
            <span className="font-semibold">{dayEvents.length}</span>{" "}
            <span className=" flex flex-col ">
              {dayEvents.length > 1
                ? "Events".split("").map((e, i) => (
                    <span className="font-light" key={i}>
                      {e}
                    </span>
                  ))
                : "Event".split("").map((e, i) => (
                    <span className="font-light" key={i}>
                      {e}
                    </span>
                  ))}
            </span>
          </span>
          <span className="hidden sm:block">
            {dayEvents.length} {dayEvents.length > 1 ? "Events" : "Event"}
          </span>
        </>
      )}
    </Card>
  );
};

export default Day;
