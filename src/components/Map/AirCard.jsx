import * as React from 'react';

function formatPollutantName(pollutant) {
  const pollutantNames = {
      "co": "CO",
      "no": "NO",
      "no2": "NO₂",
      "o3": "O₃",
      "so2": "SO₂",
      "pm2_5": "PM 2.5",
      "pm10": "PM 10",
      "nh3": "NH₃"
  };

  return pollutantNames[pollutant] || pollutant;
}


function AirCard ({name, value, level}) {
  return (
    <div className={`air-card`}>
      <div className={`indicator ${level}`}></div>
      <div className='name'>{formatPollutantName(name)}</div>
      <div className="value">{level} - {value.toFixed(0)} μg/m3</div>
    </div>
  );
}

export default AirCard
