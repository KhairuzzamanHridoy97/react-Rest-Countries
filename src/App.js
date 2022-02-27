import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Component/Countries/Countries';
import Person from './Component/Person/Person';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

// function Countries (){
 
  // data load kore ey state e rakhbo :: 
//   const [countries,setCoutries] = useState([]); // state decalre
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCoutries(data))
//   },[])
//   return(
//     <div>
//       <h2>Travel Around The World: </h2>
//       <h4>Availabel Countries: {countries.length}</h4>
//       {
//         countries.map(
//           country=> <Country
//           // name={country.name}
//           // capital={country.capital}
//           country={country}
//           >
//           </Country>
//         )
//       }
//     </div>
//   )
// };




export default App;
