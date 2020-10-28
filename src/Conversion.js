import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion() {
  return (
    <div className="Conversion">
      <div className="col-12">
        <button
          type="button"
          className="btn btn-info btn-sm float-right celsius-link"
        >
          {" "}
          C{" "}
        </button>
        <button
          type="button"
          className="active btn btn-info btn-sm float-right fahrenheit-link"
        >
          {" "}
          F{" "}
        </button>
      </div>
    </div>
  );
}
