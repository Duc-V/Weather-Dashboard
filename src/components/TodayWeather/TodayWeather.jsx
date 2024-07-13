import React from 'react'
import "./components.css"
import GaugeChart from './GaugeChart'
import Compass from './WindCompass'
import { useState } from 'react'
import sunriseImg from "../../assets/sunrise.png"
import sunsetImg from "../../assets/sunset.png"
function TodayWeather() {
  const [humidity, setHumidity] = useState(70);
  const [wind, setWind] = useState({"speed": 3.09,"deg": 355});


  const sunrise = 1720649948;
  const sunset = 1720697884;

  // Convert to Date objects
  const sunriseDate = new Date(sunrise * 1000);
  const sunsetDate = new Date(sunset * 1000);

  return (
    <div className="today-weather">
        <div className="today-weather-content">
          <div className="humidity">
            <div className="box-name">Humidity</div>
            <GaugeChart value={humidity} valueMax={100} variable={2} intrvl={3000} round={true}/>
            <div className="unit">%</div>
          </div>
          <div className="windstatus">
            <div className="box-name">Wind Speed</div>
            <GaugeChart value={wind.speed} valueMax={10} variable={0.3} intrvl={3000} round={false}/>
            <div className="unit">km/h</div>
          </div>
          <div className="pressure">
            <div className="box-name">Pressure</div>
            <GaugeChart value={1010} valueMax={2000} variable={5} intrvl={5000} round={true}/>
            <span className="unit"> hPa</span>
          </div>
          <div className="wind-direction">
            <div className="box-name">Wind Direction</div>
            <Compass direction={wind.deg}/>
          </div>
          <div className="sun">
            <div className="box-name">Sunrise & Sunset</div>
            <div className="sun-time">
            <img src={sunriseImg} alt="" width={40}/>
              {sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="sun-time">
            <img src={sunsetImg} alt="" width={40}/>
              {sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          </div>
          <div className="visibility">
            <div className="box-name">Visibility</div>
            <div>
              <span className="value">5.2</span>
              <span className="unit"> km</span>
            </div>

          </div>

        </div>
    </div>
  )
}

export default TodayWeather