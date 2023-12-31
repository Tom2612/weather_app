import { useState, useEffect, useContext } from 'react';
import { darkModeContext } from './contexts/DarkModeContext';
import SearchForm from './components/SearchForm';
import CityList from './components/CityList';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import ExtendedWeatherDisplay from './components/ExtendedWeatherDisplay';
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {
  const [cities, setCities] = useState(null);
  const [data, setData] = useState(null);
  const { darkMode } = useContext(darkModeContext);

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
    <>
      <div id='container-main' style={{
        backgroundImage: 
        darkMode ? 
          'url(https://images.unsplash.com/photo-1684624957060-d532ceddce98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80)'
          : 
          'url(https://images.unsplash.com/photo-1648213649718-ddaba6e6b9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80)'
      }}>
        <div id='form-container' style={{ borderBottom: darkMode ? '1px solid white' : '1px solid black'}}>
          <div id='controls-container'>
            <SearchForm setCities={setCities} />
            <DarkModeSwitch />
          </div>
          {cities && <CityList list={cities} handleSelect={handleSelect} /> }
        </div>

        <div id='weather-container'>
          {!data && <h1 style={{textAlign: 'center', width: '100%'}}>Start searching</h1>}
          {data && <WeatherDisplay data={data} /> }
          {data && <ExtendedWeatherDisplay data={data} />}
        </div>

        {data && <ForecastDisplay data={data} />}        
      </div>
    </>
  )
}

export default App;
