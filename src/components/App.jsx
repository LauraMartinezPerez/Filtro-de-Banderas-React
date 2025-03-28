import "../scss/App.scss";
import ListCountries from "./ListCountries";
import countriesData from "../Services/data.json";
import Filters from "./Filters";
import { useState } from "/react";


function App() {

    const [filterValue, setFilterValue]= useState ("");

    const changeFilterValue = (valueInput) => {
        setFilterValue(valueInput);
    }

    const filteredCountries = countriesData.filter((country) => {
        console.log(country);
        setFilterValue.includes.
    })

    return (
        <>
        <header className="header">
            <h1>Country Info App</h1>
            <p>Explore information about countries, capital, and flags. Add new countries and filter through the list!</p>
        </header>
        <main>
            <Filters onChangeFilter={changeFilterValue}/>
            <ListCountries countries={countriesData}/>
        </main>
        </>
    )
}

export default App
