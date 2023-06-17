import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import CityList from './components/CityList';

function App() {
  const [cities, setCities] = useState(null);
  const [chosenCity, setChosenCity] = useState(null);

  useEffect(() => {
    const getWeather = async() => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=${import.meta.env.VITE_app_ID}`, {mode:'cors'});
      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${import.meta.env.VITE_app_ID}`, {mode:'cors'});
      
      const weatherData = await response.json();
      const weatherData2 = await response2.json();
      
      console.log('Now', weatherData);
      console.log('forecast', weatherData2);
    };

    // getWeather();
    
  }, []);

  const handleSelect = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${import.meta.env.VITE_app_ID}`)
    const json = await response.json();
    
    setChosenCity(city);
    console.log(city);
  }

  return (
    <>
      <SearchForm setCities={setCities} />
      {cities.length > 0 && <CityList list={cities} handleSelect={handleSelect} /> }

    </>
  )
}

export default App
