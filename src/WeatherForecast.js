import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row forecast-section">
        <p>Friday</p>
        <div className="col-12 col-md-6 left-forecast">
          <img
            className="icon-forecast"
            alt="Forecast"
            src={require("./img/02d.png")}
          />
          <p>Light Rain</p>
        </div>
        <div className="col-12 col-md-6 right-forecast">
          <ul>
            <li>19 °C</li>
            <li>16 °C</li>
          </ul>
        </div>
      </div>

      <div className="row forecast-section">
        <p>Saturday</p>
        <div className="col-12 col-md-6 left-forecast">
          <img
            className="icon-forecast"
            alt="Forecast"
            src={require("./img/02d.png")}
          />
          <p>Light Rain</p>
        </div>
        <div className="col-12 col-md-6 right-forecast">
          <ul>
            <li>19 °C</li>
            <li>16 °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
