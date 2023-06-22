import { createContext, useEffect, useState } from "react"
import CountryFilterForm from "../components/CountryFilterForm"
import CountryList from "../components/CountryList"
import axios from 'axios'

const API_URL = 'https://restcountries.com/v3.1/all'

export const CountryContext = createContext()

export default function CountryListPage() {
  const [filterName, setFilterName] = useState('')
  const [filterRegion, setFilterRegion] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    axios.get(API_URL, { signal: controller.signal })
    .then(res => {
      if (res.status === 200) {
        setCountries(res.data)
      }
      return Promise.reject(res)
    })
    .catch(e => {
      if (e.name === 'AbortError') return
    })

    return () => {
      controller.abort()
    }
  }, [])
  
  const filteredCountries = countries.filter(country => {
    const nameMatch = country.name.common.toLowerCase().includes(filterName.toLowerCase())
    const regionMatch = country.region === filterRegion
  
    if (filterName === '' && filterRegion === '') return true
  
    if (filterName !== '' && filterRegion !== '') return nameMatch && regionMatch
  
    if (filterName !== '') return nameMatch
  
    if (filterRegion !== '') return regionMatch
  
    return false
  })
  

  return (
    <CountryContext.Provider value={{ countries: filteredCountries }}>
      <div className="container">
        <CountryFilterForm 
          name={filterName} 
          setName={setFilterName} 
          regionValue={filterRegion} 
          setRegion={setFilterRegion} 
        />
        <CountryList />
      </div>
    </CountryContext.Provider>
  )
}
