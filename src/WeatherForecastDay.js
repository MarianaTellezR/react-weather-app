import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="row forecast-section">
        <p className="day-forecast">{day()}</p>
        <div className="col-12 col-md-6 left-forecast">
          <img
            className="icon-forecast"
            alt="Forecast"
            src={require("./img/" + props.data.weather[0].icon + ".png")}
          />
          <p className="text-capitalize">{props.data.weather[0].description}</p>
        </div>
        <div className="col-12 col-md-6 right-forecast">
          <p>
            {minTemperature()} <strong>{maxTemperature()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
