import "../scss/components/country.scss";

function Country({ infoCountry }) {
  return (
    <li className="country">
      <p>{infoCountry.flag}</p>
      <h3>{infoCountry.name.common}</h3>
      <p>{infoCountry.capital[0]}</p>
      <p>{infoCountry.continents[0]}</p>
    </li>
  );
}

export default Country;
