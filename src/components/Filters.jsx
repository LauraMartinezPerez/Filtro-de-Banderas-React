import "../scss/core/_reset.scss";


function Filters({ onChangeFilter, onChangeContinet }) {
  const handleChangeCountry = (ev) => {
    onChangeFilter(ev.target.value);
  }
  const handleChangeContinents = (ev) => {
    onChangeContinet(ev.target.value);
  }

  return (
    <form>
      <h3>Filters</h3>
      <fieldset>
        By Country{" "}
        <input type="text" placeholder="Country" onChange={handleChangeCountry} />
      </fieldset>
      <fieldset>
        <label htmlFor="continent">By Continent </label>
        <select name="continent" id="continent" onChange={handleChangeContinents}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">Amercia del Norte</option>
          <option value="South America">America del Sur</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antartida</option>
        </select>
      </fieldset>
    </form>
  );
}
export default Filters;
