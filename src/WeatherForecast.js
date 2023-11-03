import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
  }

  if (loaded) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thur</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19° |</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
