

function Filters ({ onChangeFilter }) {
    const handleChange = (ev) => {
        onChangeFilter(ev.target.value)
    };

    return (
        <section>
            <h3>Filters</h3>
            <div>
            By Country <input type="text" placeholder="Country" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="continent">By Continent </label>
                <select name="continent" id="continent">
                    <option value="">Select Continent</option>
                    <option value="all">All</option>
                    <option value="af">Africa</option>
                    <option value="na">North America</option>
                    <option value="sa">South America</option>
                    <option value="eu">Europe</option>
                    <option value="as">Asia</option>
                    <option value="oc">Oceania</option>
                </select>
            </div>
        </section>
    )
 
}
export default Filters;