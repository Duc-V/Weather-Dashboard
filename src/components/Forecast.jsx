import React from 'react'
import './Forecast'
function Forecast({currentCity, weatherForecast}) {
  return (
    <div className="forecast">
        <div className="forecast-content">
          {currentCity ?<div className="icon">
            <img src={`https://openweathermap.org/img/wn/${currentCity.weather.weather[0].icon}@2x.png` } width={'80px'} alt="" />
          </div> : ''}
          <div className="forecast">
          {weatherForecast ? weatherForecast.map((weatherObj, index) => (
            <div key={index}>
              Feels like: {weatherObj.main.feels_like}&deg;C
            </div>
          )) : ''}
          </div> 
        </div>
    </div>
  )
}

export default Forecast