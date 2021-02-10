import React from "react"; 
import './App.css';
import Weather from "./Weather"; 

export default function App() {
  return (
    <div className="App"> 
    <div className="container">
    <h2> Remember to smile today <span>&#128522;</span></h2>
    <Weather defaultCity="Amsterdam" /> 
    <footer className="footer"> 
      This project was coded by Roxana Rognean and is 
      <a href="https://github.com/Rox-R/my-react-app-project" target="_blank" rel="noreferrer">  open-sourced on GitHub</a> 
</footer>
</div>
    </div>);
      
        
}

