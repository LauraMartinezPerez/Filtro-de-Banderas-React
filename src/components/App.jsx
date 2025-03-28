import "../scss/App.scss";
import ListCountries from "./ListCountries";
import countriesData from "../Services/data.json";
import Filters from "./Filters";
import { useState } from "react";

function App() {
  const [filterCountry, setFilterCountry] = useState("");
  const [filterContinent, setFilterContinent] = useState("All");

  const changeFilterCountry = (valueInput) => {
    setFilterCountry(valueInput);
  }
  const changeFilterContinets = (valueInput) => {
    setFilterContinent(valueInput);
  }

  const filteredCountries = countriesData.filter((country) => {
    return country.name.common.toLowerCase().includes(filterCountry.toLowerCase());
  })

  const filteredContinentsAndCountry = filteredCountries.filter((country) => {

    if (filterContinent === "All") {
        return true;
    } else {
        return country.continents[0] === filterContinent; 
    }

  })


  return (
    <>
      <header className="header">
        <h1>Country Info App</h1>
        <p>
          Explore information about countries, capital, and flags. Add new
          countries and filter through the list!
        </p>
      </header>
      <main>
        <Filters onChangeFilter={changeFilterCountry} onChangeContinet={changeFilterContinets} />
        <ListCountries countries={filteredContinentsAndCountry} />
      </main>
    </>
  );
}

export default App;
