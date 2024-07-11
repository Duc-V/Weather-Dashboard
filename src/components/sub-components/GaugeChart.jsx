import React,{useEffect, useState} from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

function GaugeChart({humidity, setHumidity}) {

  useEffect(() => {
    if (humidity === 0) {
      return;
    }
    const interval = setInterval(() => {
      setHumidity(prevValue => {
        const change = Math.floor(Math.random() * 5) - 2; // Change by -2, -1, 0, 1, or 2
        let newValue = prevValue + change;
        return newValue;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [humidity]); // Include humidity in the dependency array

  return (
    <div className='gauge-chart'>
      <Gauge
        value={humidity}
        startAngle={-110}
        endAngle={110}
        innerRadius="72%"
        outerRadius="100%"
        color="white"
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 30,
            transform: 'translate(0px, 0px)',
            '& tspan': {
              fill: '#c9e6ea', // Adjust the text color here
            },
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: '#4ca9ee',
          }
        }}
        text={({ value}) => `${value}%`}
      />
    </div>
  )
}

export default GaugeChart



