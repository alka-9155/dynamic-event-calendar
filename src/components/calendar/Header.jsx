// src/components/calendar/Header.jsx

import React from "react";
import { Button } from "../ui/button";

const Header = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[currentMonth.getMonth()];

  return (
    <div className="flex justify-between items-center mb-4">
      <Button onClick={onPrevMonth} variant="outline">
        Previous
      </Button>
      <h2 className="text-xl font-semibold">
        {monthName} {currentMonth.getFullYear()}
      </h2>
      <Button onClick={onNextMonth} variant="outline">
        Next
      </Button>
    </div>
  );
};

export default Header;
