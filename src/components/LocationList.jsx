import React from 'react'
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = cities => (
  cities.map(city => (<WeatherLocation key={city} city={city} />))
);

const LocationList = ({cities}) => {
  return (
    <div>
      {strToComponent(cities)}
    </div>
  )
}

Location.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;