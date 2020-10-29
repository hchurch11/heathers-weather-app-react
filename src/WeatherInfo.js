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
            <WeatherIcon code={props.data.icon} />
          </h2>
          <h2 className="sky text-capitalize ">{props.data.description}</h2>
        </div>

        <div className="col-4 float-right Conversion">
          <Conversion
            fahrenheit={props.data.temp}
            high={props.data.highTemp}
            low={props.data.lowTemp}
          />
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
