import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const apiKey = 'c0fce1e9e8b146762743bea2e02096e6';
const url = 'http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component {
  constructor({city}) {
    super();
    this.state = {
      city,
      data: null,
    };
  }

  componentWillMount() {
    const {city} = this.state;
    const apiUrl = `${url}?q=${city}&APPID=${apiKey}`;
    fetch(apiUrl).then((response) => {
      return response.json();
    }).then((weatherData) => {
      const data = transformWeather(weatherData);
      this.setState({ data });
    });
  }

  render = () => {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={60} thickness={7}/>}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;
