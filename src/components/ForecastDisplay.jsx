import codeSelector from '../utils/codeSelector';

export default function ForecastDisplay(props) {
    const { forecast } = props.data;

    return (
        <div>
            {forecast.map((day, index) => (
                <div key={index}>
                    <h1>{day.dt_txt}</h1>
                    <p>{day.main.temp}</p>
                    <p>{day.main.feels_like}</p>
                    <p>{day.weather[0].main}</p>
                    <span className='material-symbols-outlined'>{codeSelector(day.weather[0].id)}</span>
                </div>
            ))}
        </div>
    )
}
