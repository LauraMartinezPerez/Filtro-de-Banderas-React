import "../scss/core/_reset.scss";
import Country from "./Country";
import "../scss/components/listCountries.scss";

function ListCountries ({ countries }) {
    return (
        <ul className="listCountries">
           { 
            countries.map ((country) => {
                
                return (
                  <Country key={country.flag} infoCountry={country}/>
                )
           })}
        </ul>

/*         <section>
            <ul></ul>
        </section> */
    )
}
export default ListCountries