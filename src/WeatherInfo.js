import React from "react"; 
import FormattedDate from "./FormattedDate"; 
import WeatherIcon from "./WeatherIcon"; 
import WeatherTemperature from "./WeatherTemperature"; 


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
    <h1> {props.data.city}, {props.data.country} </h1>

        <ul>
            <li className="weather-date"> 
        <FormattedDate date={props.data.date} />  </li> 
        <div className="row">
        <li className="weather-icon"> <WeatherIcon code={props.data.icon} /> </li> 
       <li className="weather-temp"> <WeatherTemperature celsius={props.data.temperature} /> </li>
     </div>
         
           
                <div className="weather-conditions">
                <li className="text-capitalize"> 
                Conditions: {props.data.description} || Humidity: {Math.round(props.data.humidity)}% || 
                Wind: {Math.round(props.data.wind)}km/h </li>
           </div>
            </ul>
            </div>

    
    );
}