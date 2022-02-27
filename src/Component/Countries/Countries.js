import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    // data load kore ey state e rakhlam 
    const [countries,setCountries] = useState([]); //declare state

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div >
            <div>

                  <h1 className='m-3'> React Rest Countries: {countries.length}</h1>
            </div>
            <div className='countries-container'>

            {
                countries.map(
                    country=>  
                 
                    <Country 
                    key={country.capital}
                    country={country}
                    >

                     </Country>
                )
            }
            </div>
        </div>
    );
};

export default Countries;