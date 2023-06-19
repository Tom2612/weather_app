

export default function ExtendedWeatherDisplay({ data }) {
    return (
        <div id='extended-weather-container'>
            <span className="material-symbols-outlined">thermostat</span>
            <p>Feels Like: <strong>{data.weather.main.feels_like.toFixed(1)} &deg;C</strong></p>
            <span className="material-symbols-outlined">water_drop</span>
            <p>Humidity: <strong>{data.weather.main.humidity} %</strong></p>
            <span className="material-symbols-outlined">rainy</span>
            <p>Chance of rain: <strong>{data.forecast[0].pop * 100} %</strong></p>
        </div>
    )
}
