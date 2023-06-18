export default function CityList(props) {
  return (
    <div id='cities-container'>
        {props.list.map((city, index) => (
            <div key={city.name + city.country + index} onClick={() => props.handleSelect(city)}>
                <h1>{city.name}</h1>
                <p>{city.state}, {city.country}</p>
            </div>
        ))}
    </div>
  )
}
