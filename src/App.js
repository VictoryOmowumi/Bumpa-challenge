import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Body from './Body/Body'
import Details from './Components/Details/Details'

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }
    

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
    <div className="app-container" id={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Body toggleTheme={toggleTheme} />} />
        <Route path='/details/:name' element={<Details toggleTheme={toggleTheme} />} />	

      </Routes>
    </Router>
    </div>
    </ThemeContext.Provider>
  )
}

export default App