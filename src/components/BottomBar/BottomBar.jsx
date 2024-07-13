import React from 'react'
import './components.css'
import CityCard from './CityCard'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import useCityCoordinates from '../../fetchers/fetchCityCoordinates'
import useCityWeather from '../../fetchers/fetchCityWeather';

function BottomBar({ citiesData , setCurrentCity}) {
  // console.log(citiesData)
  return (
    <div className="bottom-bar">
      {citiesData.map((cityObj) => (
        <CityCard key={cityObj.city} cityObj={cityObj} setCurrentCity={setCurrentCity} />
      ))}
    </div>
  );
}

export default BottomBar;