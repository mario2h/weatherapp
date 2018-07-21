import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from '../../constants/weathers';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const location = 'Santiago,CL';
const apiKey = 'c0fce1e9e8b146762743bea2e02096e6';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;

const data1 = {
  temperature: 28,
  weatherState: SUN,
  humidity: 10,
  wind: '15 m/s',
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Santiago',
      data: data1,
    };
  }

  handleUpdateClick = () => {
    fetch(apiUrl).then((response) => {
      console.log(response);
      return response.json();
    }).then((weatherData) => {
      console.log(weatherData);
      const data = transformWeather(weatherData);
      this.setState({ data });
    });
  }

  render = () => {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button type="button" onClick={this.handleUpdateClick}>
          Actualizar
        </button>
      </div>
    );
  }
}

export default WeatherLocation;
