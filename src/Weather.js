import React from "react";
import "./Weather.css";

export default function Weather() {
  var icon = "01d";
  var urlBackground = require("./img/backgrounds/" + icon + ".png");
  console.log(urlBackground);

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
          <h2>San Francisco</h2>
        </div>

        <h3>Fri, July 28 15:15</h3>

        <div className="row weather-results">
          <div className="col-xs-12 col-sm-6 weather-temperature-info">
            <img
              className="weather-now"
              alt="Today's Weather"
              src={require("./img/01d.png")}
            />
            <h4>Sunny</h4>
          </div>
          <div className="col-xs-12 col-sm-6 weather-temperature">
            <h1>
              23 <sup>°C</sup>
            </h1>
          </div>
        </div>
      </div>
      {/* Below Background Section */}
      <div className="lower-section-main">
        <div className="row">
          <div className="col-12 col-sm-4 weather-feels">
            <div className="row">
              <div className="col-12 col-sm-6 feels-like-left">
                <img
                  className="weather-now"
                  alt="Today's Weather"
                  src={require("./img/01d.png")}
                />
              </div>
              <div className="col-12 col-sm-6 feels-like-right">
                <p>
                  Feels like: <br></br>22 °C
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
                13 %
              </li>
              <li>
                <img
                  className="weather-stats-icon"
                  alt="Wind Speed"
                  src={require("./img/wind.png")}
                />
                9 km/h
              </li>
              <li>
                <img
                  className="weather-stats-icon"
                  alt="Visibility"
                  src={require("./img/visibility.png")}
                />
                20 km
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
                  <li>Max: 29°C</li>
                  <li>Min: 20°C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
