import axios from 'axios'

const api_key = import.meta.env.VITE_OPEN_WEATHER_KEY

const getCurrent = (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=` + lat + 
  `&lon=` + lon + `&appid=` + api_key + `&units=metric`

  setTimeout(10000)  

  const request = axios.get(url)
  return request.then(response => response.data)
}

export default {
    getCurrent: getCurrent
}