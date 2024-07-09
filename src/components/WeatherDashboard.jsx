import React, { useState, useEffect } from 'react';
import LeftBar from './LeftBar';
import TodayWeather from './TodayWeather';
import TodayInfo from './Forecast';
import Map from './Map';
import TempGraph from './TempGraph';
import BottomBar from './BottomBar';
import fetchCityCoordinates from '../fetchers/fetchCityCoordinates'
import fetchCityWeather from '../fetchers/fetchCityWeather';
import './components.css'
function WeatherDashboard() {

    // default cities
    const cities = [
      {city: "New York County", state: "New York" , country: "US"}
      ,{city: "Tokyo", state: "" , country: "JP"}, 
      {city: "Lisbon", state: "" , country: "PT"}];

    const [citiesData, setCitiesData] = useState(null);

    useEffect(() => {
      const fetchDataForCities = async () => {
        try {
          const dataPromises = cities.map(async (cityObj) => {
            const coordinates = await fetchCityCoordinates(cityObj.city, cityObj.state, cityObj.country);
            const weather = await fetchCityWeather(coordinates.lat, coordinates.lon);
            const city = cityObj.city;
            return { city , coordinates, weather };
          });
    
          const results = await Promise.all(dataPromises);
          setCitiesData(results);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
    
      fetchDataForCities();
    }, []);

    return (
      <div className='weather-dashboard'>

        <div className="top-bar"></div>
        <LeftBar/>
        <TodayWeather/>
        <TodayInfo/>
        <Map/>
        <TempGraph/>
        <BottomBar citiesData={citiesData ? citiesData : []}/>
      </div>
    );
  }
  
  export default WeatherDashboard;