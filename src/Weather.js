import React from "react";
import "./Weather.css";

export default function Weather() {
  let icon = "01d";
  let urlBackground = `./img/${icon}.png`;

  return (
    <div
      className="Weather"
      style={{ backgroundImage: `url(${require("./img/01d.png")})` }}
    >
      {/* Background Cool Section */}
      <div>
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <h2>San Francisco</h2>
        <h3>Fri, July 28 15:15</h3>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h4>Sunny</h4>
          </div>
          <div className="col-sm-12 col-md-6">
            <h1>23 °C</h1>
          </div>
        </div>
      </div>
      {/* Below Background Section */}
      <div>
        <div className="row">
          <div className="col-12 col-sm-4">
            <p>Hello Box 1</p>
            <div className="row">
              <div className="col-12 col-sm-6">
                <p>Icon Sunny</p>
              </div>
              <div className="col-12 col-sm-6">
                <p>Feels like: 22°C</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <p>Hello Box 2</p>
            <ul>
              <li>13 %</li>
              <li>9 km/h</li>
              <li>10 km</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <p>Hello Box 3</p>
            <div className="row">
              <div className="col-12 col-sm-6">
                <p>Icon Termometer</p>
              </div>
              <div className="col-12 col-sm-6">
                <ul>
                  <li>Max</li>
                  <li>29°C</li>
                  <li>Min</li>
                  <li>10°C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
