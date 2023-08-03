import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <p>Friday</p>
        <div className="col-12 icon-section">
          <img
            className="icon-forecast"
            alt="Forecast"
            src={require("./img/01d.png")}
          />
        </div>
        <div className="col-12 description-section">
          <p>Light Rain</p>
        </div>
        <div className="col-12 temperature-section">
          <ul>
            <li>19 °C</li>
            <li>16 °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
