import React from "react";

const DateCell = ({ day, onClick, startDate, endDate }) => {
  const today = new Date().getDate();
  let className = "date-cell";

  if (day === today) {
  className += " today";
}

if (day === startDate && day === endDate) {
  className += " start end";
} else if (day === startDate) {
  className += " start";
} else if (day === endDate) {
  className += " end";
} else if (startDate && endDate && day > startDate && day < endDate) {
  className += " in-range";
}
  return (
    <div className={className} onClick={() => onClick(day)}>
      {day}
    </div>
  );
};

export default DateCell;