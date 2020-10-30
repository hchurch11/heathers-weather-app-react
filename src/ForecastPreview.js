import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();

    return date.toLocaleString(`en-US`, { hour: `numeric`, hour12: true });
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}º F`;
  }

  function description() {
    let description = props.data.weather[0].description;
    return `${description}`;
  }

  return (
    <div className="ForecastPreview col futureDate">
      <h4>{hours()}</h4>
      <span className="weather-description">
        <WeatherIcon code={props.data.weather[0].icon} />
      </span>
      <h5>{description()}</h5>
      <p>{temperature()}</p>
    </div>
  );
}
