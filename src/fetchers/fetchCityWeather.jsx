const fetchWeatherData = async (lat, lon) => {
  try {
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=edb33546896b6ad3e1d57b86d9c0c8db`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Propagate the error to the caller
  }
};

export default fetchWeatherData;