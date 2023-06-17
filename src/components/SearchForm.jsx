import { useState } from 'react';

export default function SearchForm(props) {

    const [city, setCity] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!city){
        return props.setCities(null);
        }

        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c6332489d214b5eefb799cffe1ca4f0e`, {mode:'cors'});
        const cityData = await response.json();

        props.setCities(cityData);
  }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Type City name here' onChange={(e) => setCity(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
    )
}
