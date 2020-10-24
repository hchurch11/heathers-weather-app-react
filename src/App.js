import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Forecast from "./Forecast";
import icon from "../src/icons8-windy_weather.png";

export default function App() {
  let weatherData = {
    city: "Millcreek",
    time: "5:45pm",
    date: "20 Oct 2020",
    temperature: "81",
    high: "83",
    low: "66",
    description: "Partly Cloudy",
    feelsLike: "79",
    humidity: "30",
    windSpeed: "6",
  };

  return (
    <div className="WeatherApp">
      <div className="container">
        <Search />
      </div>
      <div className="container currentWeather">
        <div className="row">
          <div className="col-4 currentCity">
            <h1 className="city">{weatherData.city}</h1>
            <h2 id="day-time">{weatherData.time}</h2>
            <p id="date-today">{weatherData.date}</p>
          </div>
          <div className="col-4 weather-state">
            <h1>
              <img
                className="weather-icon-today"
                src={icon}
                alt="weather-icon-today"
              />
            </h1>
            <h2 id="sky">{weatherData.description}</h2>
          </div>
          <div className="col-4" id="temp">
            <h1 className="currentTemp">{weatherData.temperature}</h1>
            <h2 className="highLow" id="high-low">
              {weatherData.high}º | {weatherData.low}º
            </h2>
          </div>
        </div>
      </div>
      <div className="current-conditions">
        <ul>
          <li className="extra" id="feels-like">
            feels-like: {weatherData.feelsLike}º
          </li>
          <li className="extra" id="humidity">
            humidity: {weatherData.humidity}%
          </li>
          <li className="extra" id="wind">
            wind: {weatherData.windSpeed} mph
          </li>
        </ul>
      </div>
      <div className="row forecast">
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
