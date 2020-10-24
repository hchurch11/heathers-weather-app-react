import React from "react";
import "./Forecast.css";
import icon from "../src/icons8-windy_weather.png";

export default function Forecast() {
  let futureTemp = {
    high: "82",
    low: "63",
    time: "3pm",
    description: "Mostly Sunny",
  };
  return (
    <div className="col futureDate">
      <h4>{futureTemp.time} </h4>
      <img className="futureWeatherIcon" src={icon} alt="future-weather-icon" />
      <h5>{futureTemp.description}</h5>
      <p>
        {futureTemp.high} | {futureTemp.low}°
      </p>
    </div>
  );
}
