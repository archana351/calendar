import React, { useState } from "react";
import DateCell from "./DateCell";

const Calendar = ({ startDate, endDate, setStartDate, setEndDate, currentDate, setCurrentDate }) => {
   
    const year = currentDate.getFullYear();
const month = currentDate.getMonth();

const daysInMonth = new Date(year, month + 1, 0).getDate();
const firstDay = new Date(year, month, 1).getDay();

const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);


  const handleDateClick = (day) => {
    if (!startDate) {
      setStartDate(day);
    } else if (!endDate) {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  };

  return (
  <div>

    {/* 📆 Month Navigation */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
      
      <button onClick={() => setCurrentDate(new Date(year, month - 1))}>
        ◀
      </button>

      <h3>
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h3>

      <button onClick={() => setCurrentDate(new Date(year, month + 1))}>
        ▶
      </button>

    </div>
    {/* Weekdays Header */}
<div className="weekdays">
  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
    <div key={d} className="weekday">{d}</div>
  ))}
</div>
     <div className="grid">

  {/* Empty spaces before first day */}
  {Array.from({ length: firstDay }).map((_, i) => (
    <div key={"empty" + i}></div>
  ))}

  {/* Actual days */}
  {days.map((day) => (
    <DateCell
      key={day}
      day={day}
      onClick={handleDateClick}
      startDate={startDate}
      endDate={endDate}
    />
  ))}
</div>
    </div>
  );
};

export default Calendar;