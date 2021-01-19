import React from "react"; 
import "./Weather.css"; 

export default function Weather() {
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
            <span className="temperature">5</span> 
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
        
        </div>
    );
}
