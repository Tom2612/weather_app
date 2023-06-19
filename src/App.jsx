import { useState } from 'react';
import SearchForm from './components/SearchForm';
import CityList from './components/CityList';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import ExtendedWeatherDisplay from './components/ExtendedWeatherDisplay';

function App() {
  const [cities, setCities] = useState(null);
  const [data, setData] = useState(null);

  const handleSelect = async (city) => {

    setCities(null);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=${import.meta.env.VITE_app_ID}&units=metric`);
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.name},${city.country}&appid=${import.meta.env.VITE_app_ID}&units=metric`);

    const weatherjson = await response.json();
    const forecastjson = await response2.json();

    setData({
      weather: weatherjson,
      forecast: [forecastjson.list[2], forecastjson.list[10], forecastjson.list[18], forecastjson.list[26], forecastjson.list[34]]
    });
  }

  return (
    <>
      <div id='container-main'>
        <div id='form-container'>
          <SearchForm setCities={setCities} />
          {cities && <CityList list={cities} handleSelect={handleSelect} /> }
        </div>
      
        <div id='weather-container'>
          {data && <WeatherDisplay data={data} /> }
          {data && <ExtendedWeatherDisplay data={data} />}
        </div>

        {data && <ForecastDisplay data={data} />}        
      </div>
    </>
  )
}

export default App;
