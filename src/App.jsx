import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import CityList from './components/CityList';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [cities, setCities] = useState(null);
  const [chosenCity, setChosenCity] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async() => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=${import.meta.env.VITE_app_ID}`, {mode:'cors'});
      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=shenzhen&appid=${import.meta.env.VITE_app_ID}`, {mode:'cors'});
      
      const weatherData = await response.json();
      const weatherData2 = await response2.json();
      
      console.log('Now', weatherData);
      console.log('forecast', weatherData2);
    };

    // getWeather();
    
  }, []);

  const handleSelect = async (city) => {
    setChosenCity(city);
    setCities(null);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=${import.meta.env.VITE_app_ID}&units=metric`)
    const json = await response.json();

    setWeather(json);
    console.log(json);
    
  }

  return (
    <>
      <SearchForm setCities={setCities} />
      {cities && <CityList list={cities} handleSelect={handleSelect} /> }
      {weather && <WeatherDisplay weather={weather} /> }
      {/* <span className='material-symbols-outlined'>thunderstorm</span> */}
    </>
  )
}

export default App
