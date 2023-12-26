import PersonService from '../services/persons'

const Persons = ({persons, personSetter, filterName}) => {

    const displayPersonList = (filterName === '')
        ? persons.
            map(p => PersonRow(p, persons, personSetter))
        : persons.
            filter(p =>
                p.name.toLowerCase().includes(filterName.toLowerCase())
            ).
            map(p => PersonRow(p))
        
    return (
        <>
            {displayPersonList}
        </>
    )
}

const PersonRow = (p, persons, personSetter) => (
    <p key={p.id}>
        {p.name} 
        {p.number} 
        {DeleteButton(
            p.id, 
            persons, 
            personSetter)}
    </p>
)

const DeleteButton = (id, persons, personSetter) => (
    <button 
        onClick={() => {
            PersonService.deletePerson(id, persons, personSetter)
        }}>
        delete
    </button>
)



export default Persons