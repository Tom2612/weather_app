// import fromUnixTime from 'date-fns/fromUnixTime';
import { useContext } from "react";
import { darkModeContext } from "../contexts/DarkModeContext";
import codeSelector from "../utils/codeSelector";

export default function WeatherDisplay(props) {
    const { name, sys, main, weather } = props.data.weather;
    const { darkMode } = useContext(darkModeContext);

    return (
        <div id='main-weather-container' className={darkMode ? 'dark' : ''}>
            <h2>{weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
            <h3>{name}, {sys.country}</h3>
            <h1>{main.temp.toFixed(1)} &deg;C</h1>
            <span className="material-symbols-outlined">{codeSelector(weather[0].id)}</span>
        </div>
    )
}
