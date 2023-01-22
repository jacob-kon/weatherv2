import React from "react"
import './App.css';
// import {useState} from 'react'
import Images from './Images'
import Footer from './Footer'
import { postcodeValidator } from 'postcode-validator';
function App() {
    
    const [zip, setZip] = React.useState('')

    const [fetchWeather, setFetchWeather]= React.useState({location:{name:'',region:''},current:{temp_f:'',feelslike_f:''}})
    const [valid, setValid] = React.useState(true)

    function handleChange(event){
        console.log('handle change function just ran')
        setZip(event.target.value)
        console.log('zip is now:', zip)
    }

    async function handleSubmit(event){
        event.preventDefault()
        console.log('handle submit function ran')
        if (postcodeValidator(zip, 'US')){
            setValid(true)
            await fetch(`https:api.weatherapi.com/v1/current.json?key=264a2478a3ba432b870195605221512&q=${zip}&aqi=no`)
            .then(response => response.json())
            .then(data=> setFetchWeather(data))
            .catch(err => console.log('please provide a valid zip code',err));
        }else{ setValid(false)}

    }
 console.log('App() just rendered fetch weather is ',fetchWeather)
  return (
    <div className="App">
       <div className="header">
         <h3 >Weather On Demand</h3>
         <h4 className="instructions">Please enter a US zip code</h4>
         <form className="form" onSubmit={handleSubmit}>
                <input 
                type="number"
                placeholder="Enter Zip"
                onChange={handleChange}
                name="zip"
                value={zip}
                />
            <div className='getWeather'>
                <button className="btn1">Get Weather</button>
            </div>
        </form>
        
       </div> 
       <Images 
            valid = {valid}
            city={fetchWeather.location.name}
            region={fetchWeather.location.region}
            temp={fetchWeather.current.temp_f}
            feelsLike={fetchWeather.current.feelslike_f}
            />
       <Footer />
      
    </div>
  );
}

export default App;