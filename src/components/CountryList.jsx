import { CountryContext } from "../pages/CountryListPage"
import CountryCard from "./CountryCard"
import { useContext } from "react"

export default function CountryList() {
  const { countries } = useContext(CountryContext)
  
  return (
    <div className="countries-grid">
      {countries.map((country, index) => {
        return (
          <CountryCard 
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={index}
          />
        )
      })}
    </div>
  )
}
