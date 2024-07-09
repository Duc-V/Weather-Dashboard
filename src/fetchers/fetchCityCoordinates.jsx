const fetchCityCoordinates = async (city, state, country) => {
  try {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=edb33546896b6ad3e1d57b86d9c0c8db`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    let data = await response.json();
    data = data[0];
    return { lat: data.lat, lon: data.lon, country: data.country };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Propagate the error to the caller
  }
};

export default fetchCityCoordinates;