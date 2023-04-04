import React, {useState, useEffect} from 'react'
import './Details.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [country, setCountry] = useState(null);
 
 const {name} = useParams();
  
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0])
        })
    }, [name])

    if (!country) {
      return <div>Loading...</div>;
    }
  

  return (
   <div className="details">
     <div className="details-container">
                    <button onClick={() => window.history.back()}
                        className="details-back-btn"
                    ><AiOutlineArrowLeft className='icon' /></button>
               <div className="details-content">

                    <div className="details-flag">
                        <img src={country.flags.png} alt="" />
                    </div>
                <div className="details-info">
                        <h2>{country.name.common}</h2>
                        <div className="details-info-top">
                            <div className="details-info-top-left">
                                <p><span>Native Name:</span> {country.nativeName}</p>
                                <p><span>Population:</span> {country.population}</p>
                                <p><span>Region:</span> {country.region}</p>
                                <p><span>Sub Region:</span> {country.subregion}</p>
                                <p><span>Capital:</span> {country.capital}</p>
                            </div>
                            <div className="details-info-top-right">
                                <p><span>Top Level Domain:</span> {country.tld}</p>
                                {
                                  Object.keys(country.currencies).map((key, index) => {
                                    return <p key={index}><span>Currencies:</span> {country.currencies[key].name}</p>
                                  })
                                }
                                {
                                  Object.keys(country.languages).map((key, index) => {
                                    return <p key={index}><span>Languages:</span> {country.languages[key]}</p>
                                  }
                                  )

                                }
                             
                            </div>
                      </div>
                </div>
               </div>

     </div>
   </div>
  )
}

export default Details