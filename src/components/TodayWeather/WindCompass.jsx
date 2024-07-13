import React,{useEffect, useState} from 'react'
const Compass = ({ direction}) => {
  // Calculate rotation angle based on direction
  const [rotationAngle, setRotationAngle] = useState(direction);

  useEffect(() => {
    const interval = setInterval(() => {
      const originalDirection = direction; // Store the original direction prop

      // Calculate a random change between -4 to +4 degrees
      const change = Math.floor(Math.random() * 9) - 4; // Generates -4 to +4
      let newValue = originalDirection + change;

      // Ensure newValue stays within 0 to 360 degrees
      if (newValue < 0) {
        newValue += 360;
      } else if (newValue > 360) {
        newValue -= 360;
      }

      // Update rotationAngle state
      setRotationAngle(newValue);
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]); // Include direction in the dependency array

  return (
    <div className='compass'>
    
    <svg viewBox="0 0 110 110">
    {/* Compass circles */}

    <circle cx="55" cy="55" r="40" fill="none" stroke="#c9e6ea" strokeWidth="18" />

    {/* Compass needle */}
    <line x1="55" y1="55" x2="55" y2="25" stroke="red" strokeWidth="2" transform={`rotate(${rotationAngle} 55 55)`} />
    <circle cx="55" cy="55" r="2" fill="red" />

    {/* Compass directions */}
    <text x="55" y="22" textAnchor="middle" fill="#1e1f24" fontSize="20px">N</text>
    <text x="55" y="101" textAnchor="middle" fill="#1e1f24" fontSize="20px">S</text>
    <text x="15" y="60" textAnchor="middle" fill="#1e1f24" fontSize="20px">W</text>
    <text x="95" y="60" textAnchor="middle" fill="#1e1f24" fontSize="20px">E</text>

  </svg>


    </div>
  );
};

export default Compass;