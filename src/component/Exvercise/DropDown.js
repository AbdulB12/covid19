import axios from 'axios'
import React, {useEffect, useState} from 'react'
import NewsInfo from './NewsInfo';

function DropDown() {

    const [countries, setCountries]=useState([]);
    const [countryLog, setCountryLog]=useState("");

    useEffect(()=>{
        axios.get("https://api.covid19api.com/countries")
        .then(res=>{setCountries(res.data)})
        .catch(err=>{console.log(err)})},[])
    
        const countryDisplay =(e)=>{

        setCountryLog(e.target.value)
    }


  return (
    <div>
        
        <label>Select Country: </label>
        <select onChange={countryDisplay}>

            <option>***select countrty***</option>
            {countries.map((country,index)=><option key={index} value={country.Country}>{country.Country}</option>)}

        </select>

        

         <NewsInfo handleCountry={countryLog}/>
    </div>
  )
}

export default DropDown