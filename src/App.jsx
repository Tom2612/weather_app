import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';

function App() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const getWeather = async() => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=c6332489d214b5eefb799cffe1ca4f0e`, {mode:'cors'});
      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=c6332489d214b5eefb799cffe1ca4f0e`, {mode:'cors'});
      
      const weatherData = await response.json();
      const weatherData2 = await response2.json();
      
      console.log('Now', weatherData);
      console.log('forecast', weatherData2);
    };

    // getWeather();
    
  }, []);

  return (
    <>
    <SearchForm setCities={setCities} />
    {cities && cities.map((city, index) => {
      return <p key={index}>{city.name}</p>
    })}
    </>
  )
}

export default App
