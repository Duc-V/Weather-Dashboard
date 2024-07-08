import React, { useState } from 'react';
import './WeatherDashboard.css'
function WeatherDashboard() {
    const [city, setCity] = useState('New York');
    // const { weather, loading, error } = useWeather(city);
  
    const handleCityChange = (event) => {
      setCity(event.target.value);
    };
  
    return (
      <div className='weather-dashboard'>
        <div className="top-bar"></div>
        <div className="left-bar"></div>
        <div className="today-weather"></div>
        <div className="today-info"></div>
        <div className="map"></div>
        <div className="temp-graph"></div>
        <div className="bottom-bar"></div>
  
        {/* <WeatherInfo weather={weather} loading={loading} error={error} /> */}
      </div>
    );
  }
  
  export default WeatherDashboard;