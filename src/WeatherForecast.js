import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <h3>WEATHER FORECAST</h3>
        {/* Day 1 */}
        <div className="row forecast-section">
          <p className="day-forecast">{forecast[0].dt}</p>
          <div className="col-12 col-md-6 left-forecast">
            <img
              className="icon-forecast"
              alt="Forecast"
              src={require("./img/" + forecast[0].weather[0].icon + ".png")}
            />
            <p className="text-capitalize">
              {forecast[0].weather[0].description}
            </p>
          </div>
          <div className="col-12 col-md-6 right-forecast">
            <p>
              {Math.round(forecast[0].temp.min)}°{" "}
              <strong>{Math.round(forecast[0].temp.max)}°</strong>
            </p>
          </div>
        </div>

        <hr />

        {/* Day 2 */}
        <div className="row forecast-section">
          <p className="day-forecast">Saturday</p>
          <div className="col-12 col-md-6 left-forecast">
            <img
              className="icon-forecast"
              alt="Forecast"
              src={require("./img/02d.png")}
            />
            <p className="text-capitalize">Light Rain</p>
          </div>
          <div className="col-12 col-md-6 right-forecast">
            <p>
              16° <strong>19°</strong>
            </p>
          </div>
        </div>

        <hr />

        {/* Day 3 */}
        <div className="row forecast-section">
          <p className="day-forecast">Sunday</p>
          <div className="col-12 col-md-6 left-forecast">
            <img
              className="icon-forecast"
              alt="Forecast"
              src={require("./img/02d.png")}
            />
            <p className="text-capitalize">Light Rain</p>
          </div>
          <div className="col-12 col-md-6 right-forecast">
            <p>
              16° <strong>19°</strong>
            </p>
          </div>
        </div>

        <hr />

        {/* Day 4 */}
        <div className="row forecast-section">
          <p className="day-forecast">Monday</p>
          <div className="col-12 col-md-6 left-forecast">
            <img
              className="icon-forecast"
              alt="Forecast"
              src={require("./img/02d.png")}
            />
            <p className="text-capitalize">Light Rain</p>
          </div>
          <div className="col-12 col-md-6 right-forecast">
            <p>
              16° <strong>19°</strong>
            </p>
          </div>
        </div>

        <hr />

        {/* Day 5*/}
        <div className="row forecast-section">
          <p className="day-forecast">Tuesday</p>
          <div className="col-12 col-md-6 left-forecast">
            <img
              className="icon-forecast"
              alt="Forecast"
              src={require("./img/02d.png")}
            />
            <p className="text-capitalize">Light Rain</p>
          </div>
          <div className="col-12 col-md-6 right-forecast">
            <p>
              16° <strong>19°</strong>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
