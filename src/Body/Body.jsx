import React, {useState} from 'react'
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'

import './Body.css'
const Body = ({toggleTheme}) => {

  return (
    <div className="body">
        <div className="body-header">
            <Header toggleTheme={toggleTheme} />
        </div>
        <div className="body-content">
           <Main toggleTheme={toggleTheme} />
        </div>
    </div>
  )
}

export default Body