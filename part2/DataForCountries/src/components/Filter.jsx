const Filter = ({label, filterValue, handlefunc}) => (
    <div>
        {label}
        <input 
            value={filterValue} 
            onChange={handlefunc} 
        />
    </div>
)

export default Filter