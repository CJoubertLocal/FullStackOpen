import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject, notificationSetter) => {
  const request = axios.post(baseUrl, newObject)

  notificationSetter(`${newObject.name} was added to the database`)

  return request.then(response => response.data)
}

const update = (id, newObject, notificationSetter) => {
  const confirmedUpdate = window.confirm(
    `${newObject.name} is already in the phonebook. Do you want to replace the old number with the new one?`
  )

  if (!confirmedUpdate) { return }

  const request = axios.put(`${baseUrl}/${id}`, newObject)

  if (request !== null) {
    notificationSetter(`There was an error in adding ${newObject.name} to the database`)
  }

  notificationSetter(`The number for ${newObject.name} was updated`)
  return request
            .then(response => response.data)
            .catch(error => console.log(error))
}

const deletePerson = (id, arrayToUpdate, setterFunc, notificationSetter) => {
    const personToDelete = arrayToUpdate.filter(p => p.id === id)[0].name
    const confirmDeletion = window.confirm(
        `Delete ${personToDelete}?`
    )

    if (!confirmDeletion) { return }

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
            filterAndUpdate()
            notificationSetter(`${personToDelete} was deleted from the database.`)
        })
        .catch(error => {
            notificationSetter(
                `Error: ${personToDelete} had already been deleted from database.`
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