import React from 'react'
import './components.css'
import './Map'
import AirGauge from "./AirGauge"
function Map() {
  return (
    <div className="map">
        <div className="map-content">
          <AirGauge/>
          <AirGauge/>
          <AirGauge/>
          <AirGauge/>
          <AirGauge/>
          <AirGauge/>
        </div>
    </div>
  )
}

export default Map