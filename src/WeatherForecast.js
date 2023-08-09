import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h3>WEATHER FORECAST</h3>
        {/* Day 1 */}
        <WeatherForecastDay data={forecast[0]} />
        <hr />

        <WeatherForecastDay data={forecast[1]} />
        <hr />

        <WeatherForecastDay data={forecast[2]} />
        <hr />

        <WeatherForecastDay data={forecast[3]} />
        <hr />

        <WeatherForecastDay data={forecast[4]} />
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
