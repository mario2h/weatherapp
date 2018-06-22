import React, {Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { SUN, WINDY } from "./../../constants/weathers";
import "./styles.css";

const data1 = {
    temperature: 28,
    weatherState: SUN,
    humidity: 10,
    wind: '15 m/s'
}

const data2 = {
    temperature: 17,
    weatherState: WINDY,
    humidity: 5,
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
        console.log("actualizado!");
    }
    render = () => (
        <div className="weatherLocationCont">
            <Location city={this.state.city} />
            <WeatherData data = {this.state.data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
    );
}

export default WeatherLocation;