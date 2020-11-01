import React from "react";
import ForecastIcon from "./ForecastIcon";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
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
    <div className="ForecastPreview">
      <div className="col-">
        <h5>{hours()}</h5>
        <ForecastIcon code={props.data.weather[0].icon} />
        <h5>{description()}</h5>
        <h5>{temperature()}</h5>
      </div>
    </div>
  );
}
