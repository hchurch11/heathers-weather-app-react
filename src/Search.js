import React from "react";
import "./Search.css";
import searchIcon from "./icons8-search.png";
import locationIcon from "./icons8-location.png";

export default function Search() {
  return (
    <div className="Search">
      <form className="form-row" id="search-form">
        <div className="col-4">
          <input
            type="text"
            className="form-control form-control-sm bg"
            placeholder="Enter City"
            autoFocus="on"
          />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-info btn-sm" value="search">
            {" "}
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-info btn-sm"
            id="find-me-button"
          >
            <img src={locationIcon} alt="location-icon" />
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-info btn-sm float-right "
            id="celsius-link"
          >
            C
          </button>
          <button
            type="button"
            className="active btn btn-info btn-sm float-right"
            id="fahrenheit-link"
          >
            F
          </button>
        </div>
      </form>
    </div>
  );
}
