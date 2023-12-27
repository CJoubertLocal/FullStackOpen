import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
  const url = baseUrl.concat('api/all')
  const request = axios.get(url)
  return request.then(response => response.data)
}


export default {
    getAll: getAll,
}