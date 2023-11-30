import Main from './Component/Main';
// import picture from './Component/0_6HIcEJfRLzIKJUiz.png';
// import apple from './Component/slama.png'
import mylogo from './Component/Screenshot 2023-11-26 190307.png'
import myfaketext from './Component/asd.png'
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // fetch("https://restcountries.com/v3.1/all")
  // .then(res => res.json())
  // .then(data =>{

  const [countries, setCountries] = useState([])




  useEffect(() => {


    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        // console.log(data);
      })



  }, [])




  return (

    // <p> slam</p>
    <div className='BIGGEST_DIV'  >
      {
        countries.map((country, i) => (
          <div className='div-for-countryes' key={i}   >
            <img style={{ width: "200px" }} src={country.flags.svg} />
            <h1 className='h1-country'>{country.name.official} </h1>
            <h1 className='h1-country-region-2' >{country.capital} </h1>
            <h1 className='h1-country-region'>{country.region} </h1>


          </div>
        ))

      }

    </div>
  );



}

export default App;
