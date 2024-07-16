import React from 'react'
import '../components.css'

function CityCard({cityObj, setCurrentCity}) {
  const temp_max = Math.round(Number(cityObj.weather.main.temp_max));
  const temp_min = Math.round(Number(cityObj.weather.main.temp_min));

  const handleClick = () => {
    setCurrentCity(cityObj);
  };

  return (
    <div className='city-card' onClick={handleClick}>
      <div className="icon">
        <img src={`https://openweathermap.org/img/wn/${cityObj.weather.weather[0].icon}@2x.png` } width={'80px'} alt="" />
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