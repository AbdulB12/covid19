import axios from 'axios'
import React,{useState} from 'react'

function CovidInfo({countInfo}){

    const[countryData, setCountryData]=useState({});
    const displayCount=()=>{axios.get("https://api.covid19api.com/total/country/"+countInfo)
    .then(res=>{setCountryData(res.data[res.data.length-1])})
    .catch(err=>{console.log(err)})};
    return (
        <div>
            <p>{countInfo}</p>
            <button onClick={displayCount}>Take Data</button>
            <h3>Active Case: {countryData.Active}</h3>
            <h3>Confirmed Case: {countryData.Confirmed}</h3>
            <h3>Death Case: {countryData.Deaths}</h3>
            <h3>Recovered Case: {countryData.Recovered}</h3>
            
        </div>
    )
}

export default CovidInfo
