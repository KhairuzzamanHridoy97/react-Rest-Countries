import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props)
    return (
        <div className='country'>
            <h5>This is: {props.name}</h5>
            <p>Capital is : {props.capital} & population {props.population}</p>
        </div>
    );
};

export default Country;