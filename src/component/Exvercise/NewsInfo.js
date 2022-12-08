import axios from 'axios'
import React, {useState} from 'react'

function NewsInfo({handleCountry}) {

    const [countryList, setCountryList] = useState([]);

    const displayData=()=>{
        axios.get("https://api.covid19api.com/total/country/"+handleCountry)
        .then(res=>setCountryList(res.data[res.data.length-1]))
        .catch(err=>{console.log(err)})};
  return (
    <div>
        <p></p>
        <button onClick={displayData}>Take Data</button>
        <h3>Total Confirmed Cases: {countryList.Confirmed}</h3>
        <h3>Total Active Cases: {countryList.Active}</h3>
        <h3>Total Recovered Cases: {countryList.Recovered}</h3>
        <h3>Total Death Cases: {countryList.Deaths}</h3>
    </div>
  )
}

export default NewsInfo