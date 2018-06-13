import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import { CLOUD, 
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY } from "./../constants/weathers";

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
            break;
        case CLOUDY:
            return "cloudy";
            break;
        case SUN:
            return "day-sunny";
            break;
        case RAIN:
            return "rain";
            break;
        case SNOW:
            return "snow";
            break;
        default:
            return "day-sunny";
            break;
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x"/>);
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;