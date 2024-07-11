const fetchWeatherForecast = async (lat, lon) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=edb33546896b6ad3e1d57b86d9c0c8db`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
  
      // Filter the data to get one forecast per day (e.g., around midday)
      const dailyForecasts = data.list.filter(entry => {
        const date = new Date(entry.dt_txt);
        return date.getHours() === 12; // Get forecasts around midday (12:00 PM)
      });
  
      console.log('f',dailyForecasts); // Log the daily forecasts to the console
  
      return dailyForecasts;
      // You can now use the dailyForecasts array in your application
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // Propagate the error to the caller
    }
  };
  
  export default fetchWeatherForecast;
  