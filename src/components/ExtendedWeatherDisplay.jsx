

export default function ExtendedWeatherDisplay({ data }) {
    return (
        <div id='extended-weather-container'>
            <span className="material-symbols-outlined">thermostat</span>
            <p>Feels Like: {data.weather.main.feels_like}</p>
            <span className="material-symbols-outlined">water_drop</span>
            <p>Humidity: {data.weather.main.humidity} %</p>
            <span className="material-symbols-outlined">rainy</span>
            <p>Chance of rain: {data.forecast[0].pop * 100} %</p>
        </div>
    )
}
