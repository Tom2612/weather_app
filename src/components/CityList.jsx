export default function CityList(props) {
  return (
    <div id='cities-container'>
        {props.list.map((city, index) => (
            <div id='city' key={city.name + city.country + index} onClick={() => props.handleSelect(city)}>
                <h2>{city.name}</h2>
                <p>{city.state}, {city.country}</p>
            </div>
        ))}
    </div>
  )
}
