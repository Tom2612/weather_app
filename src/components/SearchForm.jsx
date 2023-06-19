import { useState } from 'react';

export default function SearchForm(props) {

    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!city){
        return props.setCities(null);
        }

        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_app_ID}`, {mode:'cors'});
        const cityData = await response.json();

        props.setCities(cityData);
        setCity('');
        console.log(cityData)
  }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Type city name here' onChange={(e) => setCity(e.target.value)} value={city} />
            <button type='submit'>Search</button>
        </form>
    )
}
