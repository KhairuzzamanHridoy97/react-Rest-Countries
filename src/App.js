import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries (){
 
  // data load kore ey state e rakhbo :: 
  const [countries,setCoutries] = useState([]); // state decalre
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCoutries(data))
  },[])
  return(
    <div>
      <h2>Travel Around The World: </h2>
      <h4>Availabel Countries: {countries.length}</h4>
    </div>
  )
}


export default App;
