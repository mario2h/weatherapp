import React, {Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { SUN } from "./../../constants/weathers";
import "./styles.css";

const location = "Santiago,CL";
const api_key = "c0fce1e9e8b146762743bea2e02096e6";
const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;

const data1 = {
    temperature: 28,
    weatherState: SUN,
    humidity: 10,
    wind: '15 m/s'
}

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: "Santiago",
            data: data1
        };
    }
    

    handleUpdateClick = () => {
        fetch(api_url).then(response => {
            console.log('response :', response);
            return response.json();
        }).then((data) => {
            console.log('data :', data);
        });
    }

    render = () => {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data = {data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
        
    };
}

export default WeatherLocation;