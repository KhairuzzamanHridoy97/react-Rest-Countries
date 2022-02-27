import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,capital,flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h4>This is: {name.common}</h4>    {/* nested object er jonnon name er pore .common bosano hoiche */}
            <p>Capital is : {capital} & population {population}</p>
        </div>
    );
};

export default Country;