import React from 'react'
import './components.css'
import CityCard from './sub-components/CityCard'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import useCityCoordinates from '../fetchers/fetchCityCoordinates'
import useCityWeather from '../fetchers/fetchCityWeather';

function BottomBar({ citiesData }) {
  console.log(citiesData)
  return (
    <div className="bottom-bar">
      {citiesData.map((cityObj) => (
        <CityCard key={cityObj.city} cityObj={cityObj} />
      ))}
    </div>
  );
}

export default BottomBar;