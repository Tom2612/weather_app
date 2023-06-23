import { useContext } from "react";
import { darkModeContext } from "../contexts/DarkModeContext";
import codeSelector from '../utils/codeSelector';
import format from 'date-fns/format';

export default function ForecastDisplay(props) {
    const { forecast } = props.data;
    const { darkMode } = useContext(darkModeContext);

    return (
        <div id='forecast-container' className={darkMode ? 'dark' : ''} style={{ borderTop: darkMode ? '1px solid white' : '1px solid black'}}>
            {forecast.map((day, index) => (
                <div key={index}>
                    <h1>{format(new Date(day.dt_txt.split(' ')[0]), 'EEEE')}</h1>
                    <p id='forecast-temp-main'>{day.main.temp.toFixed(1)} &deg;C</p>
                    <p>{day.main.feels_like.toFixed(1)} &deg;C</p>
                    <p id='forecast-weather'>{day.weather[0].main}</p>
                    <span className='material-symbols-outlined'>{codeSelector(day.weather[0].id)}</span>
                </div>
            ))}
        </div>
    )
}
