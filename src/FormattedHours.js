import React from "react";

export default function FormattedHours(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekDay = days[props.date.getDay()];

  function formatNonMilHours(props) {
    let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    } else if (hours > 12) {
      hours = hours - 12;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return props.date.toLocaleString(`en-US`, {
      hour: `numeric`,
      minute: `numeric`,
      hour12: true,
    });
  }

  return (
    <div className="formattedHours">
      {weekDay} | {formatNonMilHours(props)}
    </div>
  );
}
