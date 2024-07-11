import React, { useState, useEffect } from 'react';
import LeftBar from './LeftBar';
import TodayWeather from './TodayWeather';
import Forecast from './Forecast';
import Map from './Map';
import TempGraph from './TempGraph';
import BottomBar from './BottomBar';
import fetchCityCoordinates from '../fetchers/fetchCityCoordinates'
import fetchCityWeather from '../fetchers/fetchCityWeather';
import fetchWeatherForecast from "../fetchers/fetchWeatherForecast";
import TopBar from './TopBar';
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
      const fetchForecast = async () => {
        try {

          if (currentCity !==null) {
            console.log(currentCity);
            const forecast = await fetchWeatherForecast(currentCity.coordinates.lat, currentCity.coordinates.lon);
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