import React from 'react'
import './Modal.css'
import {IoClose} from 'react-icons/io5'
const Modal = ({country, setOpenModal}) => {
     const handleModalClose = () => {
        setOpenModal(false)
    }

  return (
   <div className="modal">
                     <button onClick={handleModalClose}>
                        <IoClose className='close-icon' />
                    </button>
         <div className="modal-content">
                <div className="modal-content-header">
                    <img src={country.flags.png} alt={country.name.common} />
                    
                </div>
                <div className="modal-content-body">
                    <h2>{country.name.common}</h2>
                  
                    <div className="modal-content-body-details">
                        <div className="modal-content-body-details-item">
                            <h4>Native Name: </h4>
                            {/* <span>{country.name.nativeName.eng}</span> */}
                        </div>
                        <div className="modal-content-body-details-item">
                            <h4>Population: </h4>
                            <span>{country.population}</span>
                        </div>
                        <div className="modal-content-body-details-item">
                            <h4>Region: </h4>
                            <span>{country.region}</span>
                        </div>
                        <div className="modal-content-body-details-item">
                            <h4>Sub Region: </h4>
                            <span>{country.subregion}</span>
                        </div>
                        <div className="modal-content-body-details-item">
                            <h4>Capital: </h4>
                            <span>{country.capital}</span>
                        </div>
                        <div className="modal-content-body-details-item">
                            <h4>Top Level Domain: </h4>
                            <span>{country.tld}</span>
                        </div>
                        <div className="modal-content-body-details-item">
                            <h4>Currencies: </h4>
                            {
                                Object.keys(country.currencies).map((currency, index) => {
                                    return (
                                        <span key={index}>{country.currencies[currency].name} | {country.currencies[currency].symbol}</span>
                                    )
                                })
                            }
                        </div>
                        <div className="modal-content-body-details-item">
                            <h4>Languages: </h4>
                           {
                                 Object.keys(country.languages).map((language, index) => {
                                    return (
                                        <span key={index}>{country.languages[language]}</span>
                                    )
                                })
                           }
                           
                        </div>
                        
                    </div>
                </div>
                <div className="modal__content__footer">
                    <div className="modal__content__footer__item">
                        <h4>Border Countries: </h4>
                        <div className="modal__content__footer__item__borders">
                           {
                             Object.keys(country.borders).map((border, index) => {
                                return (
                                    <span key={index}>{country.borders[border]}</span>
                                )
                            })
                           }
                        </div>
                    </div>
                </div>
            </div>
   </div>
  )
}

export default Modal