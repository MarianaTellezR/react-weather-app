import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="row forecast-section">
        <p className="day-forecast">{props.data.dt}</p>
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
            {Math.round(props.data.temp.min)}°{" "}
            <strong>{Math.round(props.data.temp.max)}°</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
