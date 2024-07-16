import React, { useState, useEffect } from 'react';
import TodayWeather from './TodayWeather/TodayWeather';
import Forecast from './Forecast/Forecast';
import Map from './Map/Map';
import TempGraph from './TempGraph/TempGraph';
import BottomBar from './BottomBar/BottomBar';
import fetchCityCoordinates from '../fetchers/fetchCityCoordinates'
import fetchCityWeather from '../fetchers/fetchCityWeather';
import fetchWeatherForecast from "../fetchers/fetchWeatherForecast";
import TopBar from './TopBar/TopBar';
import LeftBar from './LeftBar/LeftBar';
import './components.css'
function WeatherDashboard() {


    const [currentCity, setCurrentCity] = useState(null);
    const [weatherForecast, setWeatherForecase] = useState(null)
    // default cities
    const cities = [
      {city: "New York County", state: "New York" , country: "US"}
      ,{city: "Tokyo", state: "" , country: "JP"}, 
      {city: "Lisbon", state: "" , country: "PT"},
      {city: "Kyoto", state: "" , country: "JP"},
    ];

    const [citiesData, setCitiesData] = useState(null);

    useEffect(() => {
      if (currentCity === null){
        return;
      }
      const fetchForecast = async () => {
        try {
          if (currentCity !==null) {
            const forecast = await fetchWeatherForecast(currentCity.coordinates.lat, currentCity.coordinates.lon);

            forecast.city = currentCity.city;
            forecast.coordinates = currentCity.coordinates;
            forecast.currentTemperature = Math.floor(currentCity.weather.main.feels_like)
            console.log(currentCity)
            setWeatherForecase(forecast);
          }
          
        }
        catch (e) {
          console.error('Error fetching weather data:', e);
        }
      }

      fetchForecast ();
    },[currentCity])


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
        <TopBar/>
        <LeftBar/>
        <TodayWeather/>
        <Forecast currentCity={currentCity} weatherForecast={weatherForecast}/>
        <Map/>
        <TempGraph/>
        <BottomBar citiesData={citiesData ? citiesData : []} setCurrentCity={setCurrentCity}/>
      </div>
    );
  }
  
  export default WeatherDashboard;