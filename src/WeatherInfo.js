import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo container">
      <div className="row">
        <div className="col-md-4 left">
          <h1 className="city">{props.data.city}</h1>
        </div>

        <div className="col-md-4 center">
          <span className="FormattedHours">
            <FormattedHours date={props.data.date} />
          </span>
          <FormattedDate date={props.data.date} />
          <WeatherIcon code={props.data.icon} />
          <h2 className="sky text-capitalize ">{props.data.description}</h2>
        </div>

        <Conversion
          fahrenheit={props.data.temp}
          high={props.data.highTemp}
          low={props.data.lowTemp}
        />
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
