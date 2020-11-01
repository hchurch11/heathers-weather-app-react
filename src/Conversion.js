import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return Math.round(((props.fahrenheit - 32) * 5) / 9);
  }
  function highLow() {
    return `${Math.round(((props.high - 32) * 5) / 9)}º | ${Math.round(
      ((props.low - 32) * 5) / 9
    )}º`;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="Conversion col-md-4 flex-md-fill">
        <h1 className="currentTemp unit">{props.fahrenheit}º</h1>
        <h2>
          {" "}
          {props.high}º | {props.low}º
        </h2>
        <button
          type="button"
          className="btn btn-info btn-sm "
          onClick={showCelsius}
        >
          {" "}
          C{" "}
        </button>
        <button type="button" className="active btn btn-info btn-sm ">
          {" "}
          F{" "}
        </button>
      </div>
    );
  } else if (unit === "celsius") {
    return (
      <div className="Conversion col-md-4 flex-md-fill">
        <h1 className="currentTemp unit">{celsius()}º</h1>
        <h2>{highLow()}</h2>
        <button type="button" className="active btn btn-info btn-sm ">
          {" "}
          C{" "}
        </button>
        <button
          type="button"
          className="btn btn-info btn-sm "
          onClick={showFahrenheit}
        >
          {" "}
          F{" "}
        </button>
      </div>
    );
  }
}
