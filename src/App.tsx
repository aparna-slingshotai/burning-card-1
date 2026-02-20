import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AshCard from './components/AshCard'
import DigDeeperPage from './components/DigDeeperPage'
import './App.css'

const THEME_KEY = 'ash-theme'

function HomePage() {
  return (
    <>
      <main className="app">
        <div className="card-slide-wrapper">
          <AshCard />
        </div>
      </main>
      <div className="bottom-triangle" aria-hidden />
      <div className="bottom-box" aria-hidden />
    </>
  )
}

function App() {
  useEffect(() => {
    const root = document.documentElement
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(THEME_KEY) : null
    const theme = stored === 'light' ? 'light' : 'dark'
    root.setAttribute('data-theme', theme)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dig-deeper" element={<DigDeeperPage />} />
    </Routes>
  )
}

export default App
