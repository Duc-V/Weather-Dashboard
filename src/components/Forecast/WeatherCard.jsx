import React from 'react'

function formatTime(timeString) {
  const date = new Date(timeString);
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = `${hours}${ampm}`;
  return strTime;
}

function formatDate(timeString) {
  const date = new Date(timeString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const strDate = `${day}/${month}`;
  return strDate;
}

function WeatherCard({temp, icon, time}) {
  return (
    <div className='weather-card'>
      <div className="date">{formatDate(time)}</div>
      <div className="time">{formatTime(time)}</div>
       <img src={`https://openweathermap.org/img/wn/${icon}@2x.png` } alt="" />
      <div className="temperature">{Math. floor(temp)}°</div>
      </div>
  )
}

export default WeatherCard