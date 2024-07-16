const fetchWeatherForecast = async (lat, lon) => {
  let dailyForecasts = {city: '',coordinates:'', list: ''}
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=edb33546896b6ad3e1d57b86d9c0c8db`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();

      // Filter the data to get one forecast per day (e.g., around midday)
      dailyForecasts.list = data.list.slice(0,20)
  

  
      return dailyForecasts;
      // You can now use the dailyForecasts array in your application
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // Propagate the error to the caller
    }
  };
  
  export default fetchWeatherForecast;
  