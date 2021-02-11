import React, {useState} from "react"; 
import WeatherInfo from "./WeatherInfo"; 
import WeatherForecast from "./WeatherForecast"; 
import axios from "axios"; 
import "./Weather.css"; 


export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false}); 
    const [city, setCity] = useState(props.defaultCity); 
    function handleResponse(response) {

        setWeatherData({
            ready: true, 
            temperature: response.data.main.temp, 
            wind: response.data.wind.speed, 
            humidity: response.data.main.humidity, 
            city: response.data.name,
            country: response.data.sys.country,
            date: new Date (response.data.dt * 1000), 
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon, 
        }); 
        
    }

    function search() {
    const apiKey ="0bf2af3afb601d2b8a70e6d9dfa46409"; 
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value); 
    }

    if(weatherData.ready) {
        return (
        <div className="Weather"> 
        <form onSubmit={handleSubmit}>
            <div className="row"> 
            <div className="col-7"> 
            <input type="search" 
            placeholder="Enter city" 
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange} />
        </div>
        <div className="col-4"> 
        <input type="submit" value="search" className="btn btn-primary w-100" /> 
        </div>
        </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city} />
        </div>  );
} 
    else {
    search();
    return null; 
}
    
    }
