import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="currentWeather">
          <div className="row">
            <div className="col-4 currentCity float-left">
              <h1 className="city">{weatherData.city}</h1>
              <h3 className="currentTime text-lowercase">
                <FormattedHours date={weatherData.date} />
              </h3>
              <p className="currentDate">
                <FormattedDate date={weatherData.date} />
              </p>
            </div>
            <div className="col-4 weather-description float-center">
              <h2>
                <img
                  className="weather-icon-today"
                  src={weatherData.icon}
                  alt="{weatherData.description}"
                />
              </h2>
              <h2 className="sky text-capitalize ">
                {weatherData.description}
              </h2>
            </div>
            <div className="col-4 float-right">
              <h1 className="currentTemp">{weatherData.temp}º</h1>
              <h2 className="highLow">
                {weatherData.highTemp}º | {weatherData.lowTemp}º
              </h2>
            </div>
          </div>
        </div>
        <div className="current-conditions">
          <ul>
            <li className="extra" id="feels-like">
              feels-like: {weatherData.feelsLike}º
            </li>
            <li> | </li>
            <li className="extra" id="humidity">
              humidity: {weatherData.humidity}%
            </li>
            <li> | </li>
            <li className="extra" id="wind">
              wind: {weatherData.wind} mph
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "a8c8f7d25b7901021cffbfe31b57f387";
    let city = "Salt Lake City";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "loading. . . ";
  }
}
