import React from 'react'
import "./components.css"
import GaugeChart from './sub-components/GaugeChart'
import { useState } from 'react'
function TodayWeather() {
  const [humidity, setHumidity] = useState(80);

  return (
    <div className="today-weather">
        <div className="today-weather-content">
          <div className="humidity">
            <div className="box-name">Humidity</div>
            <GaugeChart humidity={humidity} setHumidity={setHumidity}/>
          </div>
          <div className="windstatus">
            <div className="box-name">Wind Status</div>
          </div>
          <div className="sun">
            <div className="box-name">Sunrise & Sunset</div>
          </div>
          <div className="visibility">
            <div className="box-name">Visibility</div>
          </div>
          <div className="sealv">
            <div className="box-name">Sea Level</div>
          </div>
          <div className="localtime">
            <div className="box-name">Local</div>
          </div>

        </div>
    </div>
  )
}

export default TodayWeather