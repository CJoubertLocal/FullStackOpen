import { useEffect, useState } from 'react'
import Countries from './services/countries'
import Filter from './components/Filter'
import CountryResult from './components/CountryResult'

const App = () => {
  const [filterValue, setFilterValue] = useState('')
  const [countryResults, setCountryResults] = useState([])
  const [allCountryResults, setAllCountryResults] = useState([])

  useEffect(
    () => {
      Countries.getAll().then(cs => setAllCountryResults(cs))
    }, []
  )

  const filterResultsWithVal = (val) => {
    setCountryResults(allCountryResults.
      filter(c => 
        c.name.common.
          toLowerCase().includes(
            (val).toLowerCase())))
  }

  const handleFilterNameChange = (event) => {
    filterResultsWithVal(event.target.value)
  }

  const handleButtonClickForFilterValue = (val) => {
    filterResultsWithVal(val)
  }

  return (
    <div>
      <Filter 
        label='Find countries: '
        filterName={filterValue}
        handlefunc={handleFilterNameChange}
      />
      <CountryResult
        countryData={countryResults}
        handleFunc={handleButtonClickForFilterValue}
      />
    </div>
  )
}

export default App