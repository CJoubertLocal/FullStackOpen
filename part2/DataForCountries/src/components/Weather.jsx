import { useState, useEffect } from 'react'
import Weather from '../services/weather'

const WeatherData = ({countryData}) => {
    const [currentWeatherData, setCurrentWeatherData] = useState({})

    useEffect(
        () => {
          Weather.getCurrent(countryData.latlng[0], countryData.latlng[1]).then(r => setCurrentWeatherData(r))
        }, {}
    )

    if (Object.keys(currentWeatherData).length === 0) {
        return <></>
    }

    const primaryWeatherIconURL = `https://openweathermap.org/img/wn/` + currentWeatherData.weather[0].icon + `@2x.png`

    return (
        <>
            <h2>
                Weather in {countryData.name.common}
            </h2>
            
            <div>
                <p>
                    temperature {currentWeatherData.main.temp} Celcius
                </p>
                <p>
                    <img src={primaryWeatherIconURL}></img>
                </p>
                <p>
                    wind {currentWeatherData.wind.speed} m/s
                </p>
            </div>
        </>
    )
}

export default WeatherData