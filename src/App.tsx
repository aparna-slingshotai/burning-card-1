import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AshCard from './components/AshCard'
import ArticlePage from './pages/ArticlePage'
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="app">
                <div className="card-slide-wrapper">
                  <AshCard />
                </div>
              </main>
              <div className="bottom-triangle" aria-hidden />
              <div className="bottom-box" aria-hidden />
            </>
          }
        />
        <Route path="/dig-deeper" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
