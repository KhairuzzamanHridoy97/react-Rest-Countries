import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,capital,flags,region} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>This is: {name.common}</h3>    {/* nested object er jonnon name er pore .common bosano hoiche */}
            <h5>Region: {region}</h5>
            <p>Capital is : {capital} </p>
            {/* <p>Population: {population}</p> */}
        </div>
    );
};

export default Country;