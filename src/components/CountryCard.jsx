import { Link } from "react-router-dom"

export default function CountryCard({ flag, name, population, region, capital  }) {
  return (
    <Link to={`/${name}`} className="country-card">
      <img src={flag} alt="" />
      <div className="card-text">
        <h2>{name}</h2>
        <p>Population: <span>{population.toLocaleString()}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </Link>
  )
}
