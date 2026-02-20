import { useEffect } from 'react'
import AshCard from './components/AshCard'
import './App.css'

const THEME_KEY = 'ash-theme'

function App() {
  useEffect(() => {
    const root = document.documentElement
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(THEME_KEY) : null
    const theme = stored === 'light' ? 'light' : 'dark'
    root.setAttribute('data-theme', theme)
  }, [])

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

export default App
