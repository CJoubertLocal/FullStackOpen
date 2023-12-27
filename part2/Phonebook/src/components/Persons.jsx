import PersonService from '../services/persons'

const Persons = ({persons, personSetter, filterName, notificationSetter}) => {

    const displayPersonList = (filterName === '')
        ? persons.
            map(p => PersonRow(p, persons, personSetter, notificationSetter))
        : persons.
            filter(p =>
                p.name.toLowerCase().includes(filterName.toLowerCase())
            ).
            map(p => PersonRow(p, persons, personSetter, notificationSetter))
        
    return (
        <>
            {displayPersonList}
        </>
    )
}

const PersonRow = (p, persons, personSetter, notificationSetter) => (
    <p key={p.id}>
        {p.name} {p.number} {DeleteButton(
                                p.id, 
                                persons, 
                                personSetter,
                                notificationSetter)}
    </p>
)

const DeleteButton = (id, persons, personSetter, notificationSetter) => (
    <button 
        onClick={() => {
            PersonService.deletePerson(id, persons, personSetter, notificationSetter)
        }}>
        delete
    </button>
)



export default Persons