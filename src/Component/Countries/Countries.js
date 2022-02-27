import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    // data load kore ey state e rakhlam 
    const [countries,setCountries] = useState([]); //declare state

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h2>Hello Countries: {countries.length}</h2>
            
        </div>
    );
};

export default Countries;