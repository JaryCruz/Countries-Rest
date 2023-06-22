import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import { getNativeName, getLanguageString, getCurrency } from "../Utilities/helperFunctions"
import Borders from "../components/Borders"

const API_URL = 'https://restcountries.com/v3.1/name/'

export default function CountryPage() {
  const { country } = useParams()
  const [currentCountry, setCurrentCountry] = useState(null)
  
  useEffect(() => {
    const controller = new AbortController()

    axios.get(`${API_URL}${country}`, { signal: controller.signal })
    .then(res => {
      if (res.status === 200) {
        setCurrentCountry(res.data[0])
      }
      return Promise.reject(res)
    })
    .catch(err => {
      if (err.name === 'AbortError') return
    })

    return () => {
      controller.abort()
    }
  }, [country])

  return (
    <div className="container">
      {currentCountry && (
        <div className="country-page">
          <div className="flag-container">
            <Link to='/' className="btn-back">
              <i className="fa-solid fa-arrow-left"></i>
              <p>Back</p>
            </Link>
            <img src={currentCountry.flags.svg} alt="" />
          </div>
          <div className="country-details-container">
            <h1>{currentCountry.name.common}</h1>
            <div className="country-details">
              <div>
                <p><span>Native Name: </span>{getNativeName(currentCountry.name.nativeName)}</p>
                <p><span>Population: </span>{currentCountry.population.toLocaleString()}</p>
                <p><span>Region: </span>{currentCountry.region}</p>
                <p><span>Sub Region: </span>{currentCountry.subregion}</p>
                <p><span>Capital: </span>{currentCountry.capital && currentCountry.capital[0]}</p>
              </div>
              <div>
                <p><span>Top Level Domain: </span>{currentCountry.tld}</p>
                <p><span>Currencies: </span>{getCurrency(currentCountry?.currencies)}</p>
                <p><span>Languages: </span>{getLanguageString(currentCountry?.languages)}</p>
              </div>
            </div>
            <Borders borders={currentCountry?.borders} />
          </div>
        </div>
      )}
    </div>  
  )
}
