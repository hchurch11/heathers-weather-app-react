import React from "react";

export default function FormattedDate(props) {
  let date = props.date.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();

  return (
    <div className="formattedDate">
      <h3 className="currentDate">
        {date} {month} {year}
      </h3>
    </div>
  );
}
