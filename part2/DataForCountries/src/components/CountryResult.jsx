const CountryResult = ({countryData, handleFunc}) => {

    if (countryData.length > 10) {
        return (
        <>
            Too many matches, specify another filter
        </>
        )
    }

    if (countryData.length > 1) {
        return (
        <>
            {countryData.map(c => 
            <p key={c.ccn3}>
                {c.name.common} <button key={c.ccn3} onClick={() => {handleFunc(c.name.common)}}>
                        show
                </button>
            </p>)}
        </>
        )
    }

    if (countryData.length === 1) {
        const ls = []
        for (const [k, v] of Object.entries(countryData[0].languages)) {
            ls.push(v)
        }

        return (
            <>
                <h1>
                {countryData[0].name.common}
                </h1>
                <div>
                <p>
                    capital {countryData[0].capital[0]}
                </p>
                <p>
                    area {countryData[0].area}
                </p>
                </div>
                <h3>
                languages:
                </h3>
                <div>
                <ul>
                    {ls.map(l => <li key={l}>{l}</li>)}
                </ul>
                </div>
                <div>
                    {countryData[0].flag}
                </div>
            </>
        )
    }

    if (countryData.length === 0) {
        return (
        <>
            No matches - please try another search!
        </>
        )
    }
}

export default CountryResult