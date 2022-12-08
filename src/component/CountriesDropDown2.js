import axios from 'axios'
import React,{useEffect,useState} from 'react'

function CountriesDropDown({handdleCountry}) {

    const [constName, setConstName] = useState([]);
    
useEffect(()=>{

    axios.get("https://api.covid19api.com/countries")
    .then((result)=>{setConstName(result.data)})
    .catch((err)=>{console.log(err)})},[]);

const handleChange = (e)=>{

    handdleCountry(e.target.value)
}
    return (
       
        <div>
            {/* <h1>{handdleCountry}</h1> */}
            <select onChange={handleChange}>
                <option>***Select Country***</option>
            {
            
            constName.map((country,index) => <option key={index} value={country.Country}>{country.Country}</option>)
            }

            </select>
        </div>
    )
}

export default CountriesDropDown
