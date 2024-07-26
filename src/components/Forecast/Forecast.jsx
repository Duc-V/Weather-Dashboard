import React from 'react'
import './components.css'
import './Forecast'
import WeatherCard from './WeatherCard'

function Forecast({ currentCity, weatherForecast }) {
  return (
    <div className="forecast">
      <div className="forecast-content">
        <div className="top">
          {currentCity && weatherForecast ? (
            <div className="icon">
              <img src={`https://openweathermap.org/img/wn/${currentCity.weather.weather[0].icon}@2x.png`} alt="" />
              <div className="location">
                <div className="city-name">{weatherForecast.city}</div>
                <div className="country">{weatherForecast.coordinates.country}</div>
              </div>
              <div className="location">
                <div className="city-name">{weatherForecast.currentTemperature}°</div>
                <div>Temperature</div>
              </div>
            </div>
          ) : ''}
        </div>

        <div className="bottom">
          {weatherForecast ? weatherForecast.list.map((weatherObj, index) => (
            <WeatherCard key={index} temp={weatherObj.main.feels_like.toFixed(2)} time={weatherObj.dt_txt} icon={weatherObj.weather[0].icon} />
          )) : ''}
        </div>
      </div>
    </div>
  )
}

export default Forecast
