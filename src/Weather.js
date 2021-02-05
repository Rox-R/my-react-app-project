import React, {useState} from "react"; 
import axios from "axios"; 
import "./Weather.css"; 

export default function Weather() {
    const [ready, setReady] = useState(false); 
    const [temperature, setTemperature] = useState(null); 
    function handleResponse(response) {
        console.log(response.data); 
        setTemperature(response.data.main.temp); 
    }

    if(ready) {
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
        <h1> Amsterdam </h1>
        <ul>
            <li> Sunday 16:00 </li>
            <li> Mostly Sunny </li>
        </ul>
        <div className="row"> 
        <div className="col-7">
            <div className="clearfix"> 
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
            alt="Mostly sunny" className="float-left"
            />
            <div className="float-left">
            <span className="temperature">{temperature}</span> 
            <span className="units">°C</span>
            </div>
            </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 6% </li>
                <li> Humidity: 83% </li>
                <li> Wind: 16km/h </li>
            </ul>
        </div>
        </div>
        
        </div>  );
} 
    else {
    const apiKey ="0bf2af3afb601d2b8a70e6d9dfa46409"; 
    let city ="Amsterdam"; 
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse); 

    return "Loading..."; 
}
    
    }
