import React from "react";

function Weather({ weather }) {
  return weather.location && weather.current ? (
    <>
      <h2>Weather in {weather.location.name}</h2>
      <p>Temperature: {weather.current.temperature}°C</p>
      <img src={weather.current.weather_icons} style={{ width: 200 }} />
      <p>
        Wind: {weather.current.wind_speed}, {weather.current.wind_dir}
      </p>
    </>
  ) : null;
}

export default Weather;
