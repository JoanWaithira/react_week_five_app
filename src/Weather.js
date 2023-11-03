import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
// import FormattedDate from "./FormattedDate";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  //   const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  // function search() {
  //   const apiKey = "c819171fe0abdc14039af4ef5dda283b";
  //   // let city = "New York";
  //   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //   axios.get(apiUrl).then(handleResponse);
  // }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading The Weather App....";
  }
}
