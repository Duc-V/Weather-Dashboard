import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';



function AirGauge() {
  return (
    <div className='gauge-chart'>
    <Gauge
      value={60}
      cornerRadius="50%"
      sx={(theme) => ({
        height: '100%', // Ensure the Gauge component takes the full height of its container
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
    </div>
  );
}

export default AirGauge
