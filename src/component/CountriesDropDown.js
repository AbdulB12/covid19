import React,{useEffect,useState} from 'react'
import axios from 'axios'
import CovidInfo from './CovidInfo'


function CountriesDropDown() {

    const [countryList, setCountryList] = useState([]);

    const [countrySelected, setCountrySelected] = useState("");

    useEffect(()=>{axios.get("https://api.covid19api.com/countries").then((result)=>{setCountryList(result.data)}).catch((err)=>{console.log(err)})},[])

    const handleChange = (event) =>{

        setCountrySelected(event.target.value)
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option>***Select***</option>
    { countryList.map((country,index)=> <option key={index} value={country.Country}>{country.Country}</option>)}

            </select>

            <CovidInfo handleCountry={countrySelected}/>

        </div>
    )
}

export default CountriesDropDown
