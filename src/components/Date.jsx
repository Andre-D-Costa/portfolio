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
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
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
