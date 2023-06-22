import { useEffect, useState, useCallback } from "react"
import { Link } from "react-router-dom"

export default function Borders({ borders }) {
  const [data, setData] = useState([])

  const getBorderCountries = useCallback(async () => {
    const countries = await Promise.all(
      borders?.map(async (border) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${border}`
        )
        return response.json()
      })
    )

    const countryNames = countries.map((country) => country[0]?.name?.common)
    setData(countryNames)
  }, [borders])

  useEffect(() => {
    getBorderCountries()
  }, [getBorderCountries])

  return (
    <div className="border-countries">
      <p>Border Countries: </p>
      {data ? (
        data.map((border, index) => (
          <Link key={index} to={`/${border}`} className="btn-border">
            {border}
          </Link>
        ))
      ) : (
        <span>None</span>
      )}
    </div>
  )
}
