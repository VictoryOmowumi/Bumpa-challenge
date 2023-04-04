import React, {useEffect, useState} from 'react'
import './Main.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
const Main = () => {


        const URL = 'https://restcountries.com/v3.1/all'
        const [countries, setCountries] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(false)
        const [countrySearch, setCountrySearch] = useState('')
        const [regionFilter, setRegionFilter] = useState('')
        // const [country, setCountry] = useState({})
        const [currentPage, setCurrentPage] = useState(1);

     let {name} = useParams();
       const handlePageClick = (pageNumber) =>{
            setCurrentPage(pageNumber);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
       }
       const perPage = 10;
       const totalPages = Math.ceil(countries.length / perPage);

       const pagination = [];

       for (let i = 1; i <= totalPages; i++) {
              pagination.push(
                <button key={i} onClick={() => handlePageClick(i)}
                    className={currentPage === i ? 'active' : ''}
                >{i}</button>

              )
              }


        // const handleCountryClick = (country) => {
        //     setCountry(country)
         
        // }

        useEffect(() => {
            fetch(URL)
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setLoading(false)
            })
            .catch(err => {
                setError(true)
                setLoading(false)
            })
        }, [])

    const handleCountrySearch = (e) => {
        setCountrySearch(e.target.value)
    }
    const handleRegionFilter = (e) => {
        setRegionFilter(e.target.value)
    }

const filteredCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(countrySearch.toLowerCase())
})

const filteredCountriesByRegion = filteredCountries.filter(country => {
    return country.region.toLowerCase().includes(regionFilter.toLowerCase())
})

// const handleBackToTop = () => {
//     // smooth scroll to top
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     })
// }

  return (
    <div className="main">
    
        <div className="main-content">
            <div className="search-container">

                <div className="search">
                        <AiOutlineSearch className='search-icon' />
                    <input type="text" placeholder="Search for a country..."
                    value={countrySearch}
                    onChange={handleCountrySearch}

                    // onChange={handleSearch}
                    />
                </div>
                <div className="filter">
                    <select name="filter" id="filter" 
                        value={regionFilter}
                        onChange={handleRegionFilter}    
                >
                        <option value="">Filter by Region</option>
                 
                       {
                            [...new Set(countries.map(country => country.region))].map((region, index) => {
                                return <option value={region}
                                    key={index}
                                >{region}</option>
                            })

                       }
                    </select>
                
                </div>
            </div>
            
            <div className="countries-container">
                {loading && <h3>Loading...</h3>}
                {error && <h1>Error...</h1>}
                {
                    filteredCountriesByRegion.slice((currentPage - 1) * perPage, currentPage * perPage).map((country, index )=> {
                        const {name, flags, population, region, capital} = country
                        return (
                           <Link to={`/details/${name.common}`}
                           key={index} className="link">
                            <div className="country-card" key={index}
                               
                            >
                            <div className="country-flag">
                                <img src={flags.svg} alt={name.common} />
                            </div>
                            <div className="country-info">
                                <h3 className="country-name">
                                    {name.common}
                                </h3>
                                <div className="country-details">
                                    <div className="country-population">
                                        <h4 className="country-detail-title"> Population: </h4>
                                        <span className="country-detail-value">
                                            {/* add a comma after the first 3 numbers and after the next 3 */}
                                            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            
                                        </span>
                                    </div>
                                    <div className="country-region">
                                        <h4 className="country-detail-title"> Region: </h4>
                                        <span className="country-detail-value"> {region} </span>
                                    </div>
                                    <div className="country-capital">
                                        <h4 className="country-detail-title"> Capital: </h4>
                                        <span className="country-detail-value"> {capital} </span>
                                    </div>
                                </div>
                            </div>
                             </div>
                        </Link>
                        )
                    })
                }
                
            </div>
            <div className="pagination">
                    {pagination}
                </div>
        </div>
        {/* <div className="back-to-top">
            <button onClick={handleBackToTop}>
                <CgMouse className='back-to-top-icon' />
            </button>
        </div> */}
       
    </div>
  )
}

export default Main