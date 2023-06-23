import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import CityList from './components/CityList';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import ExtendedWeatherDisplay from './components/ExtendedWeatherDisplay';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  const [cities, setCities] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getPreviousLocation = async () => {
      const location = localStorage.getItem('location');
      if (!location) {
        return;
      } else {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.split(',')[0]},${location.split(',')[1]}&appid=${import.meta.env.VITE_app_ID}&units=metric`);
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location.split(',')[0]},${location.split(',')[1]}&appid=${import.meta.env.VITE_app_ID}&units=metric`);
        const data = await response.json();
        const data2 = await response2.json();
        setData({
          weather: data,
          forecast: [data2.list[2], data2.list[10], data2.list[18], data2.list[26], data2.list[34]]
        });
      }
    };

    getPreviousLocation();

  }, [])

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
    localStorage.setItem('location', city.name + ',' + city.country);
  }

  return (
    <DarkModeProvider>
      <div id='container-main'>
        <div id='form-container'>
          <SearchForm setCities={setCities} />
          {cities && <CityList list={cities} handleSelect={handleSelect} /> }
        </div>

        <div id='weather-container'>
          {!data && <h1 style={{textAlign: 'center', width: '100%'}}>Start searching</h1>}
          {data && <WeatherDisplay data={data} /> }
          {data && <ExtendedWeatherDisplay data={data} />}
        </div>

        {data && <ForecastDisplay data={data} />}        
      </div>
    </DarkModeProvider>
  )
}

export default App;
