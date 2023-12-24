const Persons = ({persons, filterName}) => {
const displayPersonList = (filterName === '')
    ? persons.
        map(p => <p key={p.id}>{p.name} {p.number}</p>)
    : persons.
        filter(p => p.name.toLowerCase().includes(filterName.toLowerCase())).
        map(p => <p key={p.id}>{p.name} {p.number}</p>)
    
    return (
        <>
        {displayPersonList}
        </>
    )
}

export default Persons