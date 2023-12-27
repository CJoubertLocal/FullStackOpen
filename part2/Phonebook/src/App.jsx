import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterName, setFilterName] = useState('')
  const [notification, setNotification] = useState('')

  useEffect(
    () => {
      PersonService.getAll().then(ps => setPersons(ps))
    }, []
  )

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <Notification
        message={notification} />
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName}
        handlefunc={handleFilterNameChange}
        />
      <h2>Add a new contact</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        notificationSetter={setNotification}
        />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        personSetter={setPersons}
        filterName={filterName}
        notificationSetter={setNotification}
        />
    </div>
  )
}

const Notification = ({message}) => {
  if (message === null) {
      return null
  }

  return (
      <div>
          {message}
      </div>
  )
}


export default App