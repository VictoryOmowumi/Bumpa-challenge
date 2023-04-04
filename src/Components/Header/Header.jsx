import React, {useState} from 'react'
import './Header.css'
import {HiOutlineMoon} from 'react-icons/hi'
import {HiMoon} from 'react-icons/hi'
const Header = ({toggleTheme}) => {
    const [darkMode, setDarkMode] = useState(false)
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        toggleTheme()
    }



  return (
    <div className="header">
        <div className="left-content">
            <h3 className="logo-text">
                Where in the world?
            </h3>
        </div>
        <div className="right-content">
            <div className="dark-mode">
               {darkMode ? 
               <HiMoon className='dark-mode-icon' onClick={handleDarkMode} /> :
                <HiOutlineMoon className='dark-mode-icon' onClick={handleDarkMode} />
                }
                {darkMode ? <p className="dark-mode-text">Dark Mode</p> : <p className="dark-mode-text">Light Mode</p>}
            </div>
        </div>
    </div>
  )
}

export default Header