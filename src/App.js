import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import FullDetails from './Components/FullDetails/FullDetails';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data =>  setCountries(data))
    .catch(err => console.log(err))
   }, []);

  const addHandleCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    
    <div className="App">

      <div className="total_loaded">
        <h2>Country Loaded : {countries.length}</h2><br/>
        <h2>Country Loaded : {cart.length}</h2>
        <FullDetails cart={cart}></FullDetails>
      </div>

      <div className="countries">
          {
              countries.map(country => <Country country={country} addHandleCountry={addHandleCountry} key={country.alpha3Code}></Country>)
          }
      </div>
    </div>
  );
}

export default App;
