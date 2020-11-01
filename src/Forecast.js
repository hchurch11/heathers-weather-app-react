import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function getForecast() {
    const apiKey = "a8c8f7d25b7901021cffbfe31b57f387";
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(forecastApiUrl).then(handleForecastResponse);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row Forecast">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
      </div>
    );
  } else {
    getForecast();
    return "loading. . . ";
  }
}
