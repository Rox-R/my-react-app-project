import React, {useState} from "react"; 
import axios from "axios"; 
import "./Weather.css"; 

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false}); 
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true, 
            temperature: response.data.main.temp, 
            wind: response.data.wind.speed, 
            humidity: response.data.main.humidity, 
            city: response.data.name,
            date: "Sunday 15:00", 
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png", 
        }); 
        
        
        
    }

    if(weatherData.ready) {
        return (
        
        <div className="Weather"> 
        <form> 
            <div className="row"> 
            <div className="col-5"> 
            <input type="search" placeholder="Enter city" className="form-control"
            autoFocus="on" />
        </div>
        <div className="col-3"> 
        <input type="submit" value="search" className="btn btn-primary w-100" /> 
        </div>
        </div>
        </form>
        <h1> {weatherData.city} </h1>
        <ul>
            <li> {weatherData.date} </li>
            <li className="text-capitalize"> {weatherData.description} </li>
        </ul>
        <div className="row"> 
        <div className="col-7">
            <div className="clearfix"> 
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
            alt="Mostly sunny" className="float-left"
            />
            <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span> 
            <span className="units">°C</span>
            </div>
            </div>
        </div>
        <div className="col-6">
            <ul>
                
                <li> Humidity: {Math.round(weatherData.humidity)}% </li>
                <li> Wind: {Math.round(weatherData.wind)}km/h </li>
            </ul>
        </div>
        </div>
        
        </div>  );
} 
    else {
    const apiKey ="0bf2af3afb601d2b8a70e6d9dfa46409"; 
    let city ="Amsterdam"; 
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse); 

    return "Loading..."; 
}
    
    }
