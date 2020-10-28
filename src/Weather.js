import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Conversion from "./Conversion";
import searchIcon from "./icons8-search.png";
import locationIcon from "./icons8-location.png";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    const apiKey = "a8c8f7d25b7901021cffbfe31b57f387";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="form-row" onSubmit={handleSubmit}>
          <div className="col-4">
            <input
              type="text"
              className="form-control form-control-sm bg"
              placeholder="Enter City"
              autoFocus="on"
              onChange={changeCity}
            />
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-info btn-sm"
              value="search"
            >
              {" "}
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-info btn-sm">
              <img src={locationIcon} alt="location-icon" />
            </button>
          </div>
          <Conversion />
        </form>
        <WeatherInfo data={weatherData} />
        <div className="row forecast">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
    return "loading. . . ";
  }
}
