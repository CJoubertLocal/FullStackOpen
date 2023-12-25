import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    const eventHandler = response => {
      setPersons(response.data)
    }

    const promise = axios
      .get("http://localhost:3001/persons")
    
    promise.then(eventHandler)
  }, 
    []
  )

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName}
        handlefunc={handleFilterNameChange}
        />
      <h2>Add a new contact</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        filterName={filterName}
        />
    </div>
  )
}

export default App