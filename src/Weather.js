import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      maxtemp: response.data.main.temp_max,
      mintemp: response.data.main.temp_min,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    var icon = weatherData.icon;

    var colors = {
      "01d": "#c797b6",
      "01n": "#33337d",
      "02d": "#e88681",
      "02n": "#8877c7",
      "03d": "#227ed8",
      "03n": "#1c0666",
      "04d": "#4bb9ef",
      "04n": "#002161",
      "09d": "#475266",
      "09n": "#34518b",
      "10d": "#61b9ff",
      "10n": "#06367d",
      "11d": "#d45f79",
      "11n": "#023f59",
      "13d": "#2c9ffd",
      "13n": "#064070",
      "50d": "#7b9ca6",
      "50n": "#061a42",
    };

    var colorBackground = colors[icon];
    var urlBackground = require("./img/backgrounds/" + icon + ".png");

    return (
      <div className="Weather">
        {/* Background Cool Section */}
        <div
          className="upper-section-main"
          style={{ backgroundImage: `url(${urlBackground})` }}
        >
          <form>
            <div className="row">
              <div className="col-12 col-sm-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                />
              </div>
              <div className="col-12 col-sm-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-light btn-search"
                />
              </div>
            </div>
          </form>

          <div className="city-title-section">
            <img
              className="location-icon"
              alt="City"
              src={require("./img/location.png")}
            />
            <h2>{weatherData.city}</h2>
          </div>

          <h3>Fri, July 28 15:15 </h3>

          <div className="row weather-results">
            <div className="col-xs-12 col-sm-6 weather-temperature-info">
              <img
                className="weather-now"
                alt={weatherData.description}
                src={require("./img/" + icon + ".png")}
              />
              <h4 className="text-capitalize">{weatherData.description}</h4>
            </div>
            <div className="col-xs-12 col-sm-6 weather-temperature">
              <h1>
                {Math.round(weatherData.temperature)} <sup>°C</sup>
              </h1>
            </div>
          </div>
        </div>
        {/* Below Background Section */}
        <div
          className="lower-section-main"
          style={{ backgroundColor: colorBackground }}
        >
          <div className="row">
            <div className="col-12 col-sm-4 weather-feels">
              <div className="row">
                <div className="col-12 col-sm-6 feels-like-left">
                  <img
                    className="weather-now"
                    alt="Today's Weather"
                    src={require("./img/" + icon + ".png")}
                  />
                </div>
                <div className="col-12 col-sm-6 feels-like-right">
                  <p>
                    Feels like: <br></br>
                    {Math.round(weatherData.feels)} °C
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 weather-stats">
              <ul>
                <li>
                  <img
                    className="weather-stats-icon"
                    alt="Humidity"
                    src={require("./img/humidity.png")}
                  />
                  {weatherData.humidity} %
                </li>
                <li>
                  <img
                    className="weather-stats-icon"
                    alt="Wind Speed"
                    src={require("./img/wind.png")}
                  />
                  {Math.round(weatherData.wind)} km/h
                </li>
                <li>
                  <img
                    className="weather-stats-icon"
                    alt="Visibility"
                    src={require("./img/visibility.png")}
                  />
                  {Math.round(weatherData.visibility / 1000)} km
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-4 weather-max-min">
              <div className="row">
                <div className="col-12 col-sm-6 max-min-temperature-left">
                  <img
                    className="weather-max-min-icon"
                    alt="Maximum and Minimum Temperature"
                    src={require("./img/termometer.png")}
                  />
                </div>
                <div className="col-12 col-sm-6 max-min-temperature-right">
                  <ul>
                    <li>Max: {Math.round(weatherData.maxtemp)}°C</li>
                    <li>Min: {Math.round(weatherData.mintemp)}°C</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d1b73b9f0676715bbd0cc493b72eb781";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
