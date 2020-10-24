import React from "react";
import "./Footer.css";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        className="gitHubLink"
        href="https://github.com/hchurch11/heathers-weather-app-2"
      >
        open-source
      </a>{" "}
      code by Heather Church
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
