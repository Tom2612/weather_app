export default function CityList(props) {
  return (
    <div>
        {props.list.map(city => (
            <div key={city.name + city.country} onClick={() => props.handleSelect(city)}>
                <h1>{city.name}</h1>
                <p>{city.state}, {city.country}</p>
            </div>
        ))}
    </div>
  )
}
