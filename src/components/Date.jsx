import React, { useState, useEffect } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateFormat = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekDay = weekDays[date.getDay()];

    return `${day}/${month}/${year}(${weekDay})-${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <p className="currentDate__format">{dateFormat(date)}</p>
    </div>
  );
}
