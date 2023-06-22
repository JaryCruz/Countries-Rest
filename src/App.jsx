import { Route, Routes } from 'react-router-dom'
import CountryListPage from './pages/CountryListPage.jsx'
import CountryPage from './pages/CountryPage.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <h1>Where in the world?</h1>
      </header>

      <Routes>
        <Route path='/' element={<CountryListPage />} index />
        <Route path=':country' element={<CountryPage />} />
      </Routes>
    </>
  )
}
