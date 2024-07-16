import React from 'react'
import './components.css'
import AirCard from "./AirCard"


const data = {
  "co":201.94053649902344,
  "no":0.01877197064459324,
  "no2":0.7711350917816162,
  "o3":68.66455078125,
  "so2":0.6407499313354492,
  "pm2_5":0.5,
  "pm10":0.540438711643219,
  "nh3":0.12369127571582794,
}

function Map() {
  const data = getAirQualityIndex(components)
  return (
    <div className="map">
          <div className="overall-quality">
            Air Quality - Good
          </div>
        <div className="map-content">
          {
            data.map((item) => (
              <AirCard key={item.key} name={item.key} level={item.level} value={item.value}/>
            ))
          }
        </div>
    </div>
  )
}

function getAirQualityIndex(components) {
  const levels = [
      { name: "Good", index: 1, ranges: { so2: [0, 20], no2: [0, 40], pm10: [0, 20], pm2_5: [0, 10], o3: [0, 60], co: [0, 4400] } },
      { name: "Fair", index: 2, ranges: { so2: [20, 80], no2: [40, 70], pm10: [20, 50], pm2_5: [10, 25], o3: [60, 100], co: [4400, 9400] } },
      { name: "Moderate", index: 3, ranges: { so2: [80, 250], no2: [70, 150], pm10: [50, 100], pm2_5: [25, 50], o3: [100, 140], co: [9400, 12400] } },
      { name: "Poor", index: 4, ranges: { so2: [250, Infinity], no2: [150, Infinity], pm10: [100, Infinity], pm2_5: [50, Infinity], o3: [140, Infinity], co: [12400, Infinity] } },
  ];

  function getLevel(pollutant, value) {
      for (let level of levels) {
          const range = level.ranges[pollutant];
          if (value >= range[0] && value < range[1]) {
              return { level: level.name, value: value };
          }
      }
      return { level: "Unknown", value: value }; // Return "Unknown" if no range is matched
  }

  const pollutants = ['so2', 'no2', 'pm10', 'pm2_5', 'o3', 'co'];

  const result = pollutants.map(pollutant => {
      return { key: pollutant, ...getLevel(pollutant, components[pollutant]) };
  });

  return result;
}

const components = {
  "co": 201.94053649902344,
  "no": 0.01877197064459324,
  "no2": 0.7711350917816162,
  "o3": 68.66455078125,
  "so2": 10,
  "pm2_5": 100,
  "pm10": 0.540438711643219,
  "nh3": 0.12369127571582794
};



export default Map