import React,{useEffect, useState} from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

function GaugeChart({value, valueMax, variable, intrvl, round}) {

  const [newValue, setNewValue] = useState(value);
  useEffect(() => {
    if (value === 0) {
      return;
    }
    const interval = setInterval(() => {
      const change = Math.random() * variable; // Change by -2, -1, 0, 1, or 2
      let newValue = value + change;
      if (round) {
        newValue = Math.floor(newValue)
      }else{
        newValue = Number(newValue.toFixed(2))
      }
      setNewValue(newValue);
    }, intrvl);

    return () => clearInterval(interval);
  }, [value]); // Include humidity in the dependency array

  return (
    <div className='gauge-chart'>
      <Gauge
        valueMax={valueMax}
        value={newValue}
        startAngle={-110}
        endAngle={110}
        innerRadius="72%"
        outerRadius="100%"
        color="white"
        className='gaugetext'
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: "1.5vw",
            transform: 'translate(0px, 0px)',
            '& tspan': {
              fill: '#c9e6ea', // Adjust the text color here
            },
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: '#c9e6ea',
          }
        }}
        text={({ value}) => `${value}`}
      />
    </div>
  )
}

export default GaugeChart



