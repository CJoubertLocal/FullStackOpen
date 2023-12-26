import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePerson = (id, arrayToUpdate, setterFunc) => {
    const request = axios.delete(`${baseUrl}/${id}`)

    const filterAndUpdate = () => {
        setterFunc(
            arrayToUpdate.filter(
                a => a.id !== id
            )
        )
    }

    return request
        .then(response => {
            console.log(response)
            filterAndUpdate()
        })
        .catch(error => {
            alert(
                `error: person ${id} was not in the server: ${error}`
            )
            filterAndUpdate()
        })
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deletePerson: deletePerson,
}