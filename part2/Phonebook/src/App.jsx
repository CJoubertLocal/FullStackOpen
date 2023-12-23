import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }

    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
    
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNewNameChange}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(p => <p key={p.name}>{p.name}</p>)}
    </div>
  )
}

export default App