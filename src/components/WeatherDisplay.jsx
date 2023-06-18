// import fromUnixTime from 'date-fns/fromUnixTime';

export default function WeatherDisplay(props) {
    const { name, coord, sys, main, weather } = props.weather;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{sys.country}</h2>
            <p>lat: {coord.lat}, lon: {coord.lon}</p>
            <h3>Current temp: {main.temp}</h3>
            <h3>Feels like: {main.feels_like}</h3>
            {/* <h4>Sunrise: {fromUnixTime(sys.sunrise).toString().split(' ')[4]}</h4> */}
            {/* <h4>Sunset: {fromUnixTime(sys.sunset).toString().split(' ')[4]}</h4> */}
            <h5>weather: </h5>
            <p>{weather[0].main}, {weather[0].description}</p>
        </div>
    )
}
