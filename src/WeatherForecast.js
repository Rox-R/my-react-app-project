import React, {useState} from "react"; 
import ForecastPreview from "./ForecastPreview"; 
import axios from "axios"; 
import "./WeatherForecast.css"; 


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false); 
    const [forecast, setForecast] = useState(null); 
    function handleForecastResponse(response) {
        
        setForecast(response.data); 
        setLoaded(true); 
    }

    if (loaded && props.city === forecast.city.name)  {
        return( 
            <div className="WeatherForecast row">
                
            <ForecastPreview data={forecast.list[0]}/>
            <ForecastPreview data={forecast.list[1]}/>
            <ForecastPreview data={forecast.list[2]}/>
            <ForecastPreview data={forecast.list[3]}/>

        </div>
        ); 
    } else {
    let apiKey="0bf2af3afb601d2b8a70e6d9dfa46409"
    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleForecastResponse); 

    return null; 
    }
    
}