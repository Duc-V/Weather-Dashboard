import React from 'react'
import '../components.css'
import image from "../../assets/clear_sky_night.png"

function CityCard({cityObj}) {
  const temp_max = Math.round(Number(cityObj.weather.main.temp_max) - 273.15);
  const temp_min = Math.round(Number(cityObj.weather.main.temp_min) - 273.15);
  return (
    <div className='city-card'>
      <div className="icon">
        <img src={image} alt="" />
      </div>
        <div className="city-name">
          {cityObj.city}
        </div>
        <div className="temperature">
          <span className='temp-max'>
            {temp_max}°
          </span>
          /{temp_min}°
        </div>
      </div>
  )
}

export default CityCard