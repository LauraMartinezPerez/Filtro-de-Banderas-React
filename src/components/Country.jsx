import "../scss/components/country.scss";

function Country ({ infoCountry }) {
    
    return (
        <li className="country">
            <p>{infoCountry.flag}</p>
            <h3>{infoCountry.name.common}</h3>
            <p>{infoCountry.capital}</p>
            <p>{infoCountry.continents}</p>
        </li>
    )
}

export default Country