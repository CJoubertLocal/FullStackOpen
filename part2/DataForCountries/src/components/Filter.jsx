const Filter = ({label, filterValue, handlefunc}) => (
    <div>
        {label}
        <input 
            id={label}
            value={filterValue} 
            onChange={handlefunc} 
        />
    </div>
)

export default Filter