import { useContext } from "react";
import { darkModeContext } from "../contexts/DarkModeContext";

export default function CityList(props) {
  const { darkMode } = useContext(darkModeContext);
  
  return (
    <div id='cities-container' className={darkMode ? 'dark' : ''}>
        {props.list.map((city, index) => (
            <div id='city' key={city.name + city.country + index} onClick={() => props.handleSelect(city)}>
                <h2>{city.name}</h2>
                <p>{city.state && city.state + ', '}{city.country}</p>
            </div>
        ))}
    </div>
  )
}
