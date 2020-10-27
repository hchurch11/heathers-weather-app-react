import React from "react";
import "./Footer.css";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        className="gitHubLink"
        href="https://github.com/hchurch11/heathers-weather-app-react"
      >
        open-sourced
      </a>{" "}
      code created with
      <img src={logo} className="App-logo" alt="logo" />
      by Heather Church
    </div>
  );
}
