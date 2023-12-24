import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const addDetails = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)

    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }

  const displayPersonList = (filterName === '')
    ? persons.
      map(p => <p key={p.id}>{p.name} {p.number}</p>)
    : persons.
      filter(p => p.name.toLowerCase().includes(filterName.toLowerCase())).
      map(p => <p key={p.id}>{p.name} {p.number}</p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input 
          value={filterName} 
          onChange={handleFilterNameChange} 
        />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addDetails}>
        <div>
          name: <input
            value={newName}
            onChange={handleNewNameChange}
           />
        </div>
        <div>
           number: <input
             value={newNumber}
             onChange={handleNewNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {displayPersonList}
    </div>
  )
}

export default App