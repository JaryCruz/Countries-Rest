import { continents } from '../Utilities/helperFunctions'

export default function CountryFilterForm({ name, setName, region, setRegion }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search for a country..."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
      <div className="select-container">
        <select value={region} onChange={e => setRegion(e.target.value)} >
          <option value="">Filter by Region</option>
          {continents.map(continent => (
            <option key={continent} value={continent}>{continent}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
