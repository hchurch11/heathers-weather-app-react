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
        <div className="col-4 float-left">
          <h1 className="city">{props.data.city}</h1>
          <FormattedHours date={props.data.date} />
          <FormattedDate date={props.data.date} />
        </div>
        <div className="col-4 float-center">
          <h2 className=" weather-description">
            <WeatherIcon code={props.data.icon} />
          </h2>
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
