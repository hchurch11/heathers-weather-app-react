import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo container">
      <div className="row">
        <div className="col-4 currentCity float-left">
          <h1 className="city">{props.data.city}</h1>
          <h3 className="currentTime text-lowercase">
            <FormattedHours date={props.data.date} />
          </h3>
          <p className="currentDate">
            <FormattedDate date={props.data.date} />
          </p>
        </div>
        <div className="col-4 weather-description float-center">
          <h2>
            <img
              className="weather-icon-today"
              src={props.data.icon}
              alt="{props.data.description}"
            />
          </h2>
          <h2 className="sky text-capitalize ">{props.data.description}</h2>
        </div>
        <div className="col-4 float-right">
          <h1 className="currentTemp">{props.data.temp}º</h1>
          <h2 className="highLow">
            {props.data.highTemp}º | {props.data.lowTemp}º
          </h2>
        </div>
      </div>
      <div className="current-conditions">
        <ul>
          <li className="extra" id="feels-like">
            feels-like: {props.data.feelsLike}º
          </li>
          <li> | </li>
          <li className="extra" id="humidity">
            humidity: {props.data.humidity}%
          </li>
          <li> | </li>
          <li className="extra" id="wind">
            wind: {props.data.wind} mph
          </li>
        </ul>
      </div>
    </div>
  );
}
