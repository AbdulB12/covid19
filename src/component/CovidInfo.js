import React,{useState} from 'react'
import axios from 'axios'

function CovidInfo({handleCountry}) {


    const [countryInfoDis, setCountryInfoDis] = useState({})

    const countryDisplay = () =>{
        axios.get("https://api.covid19api.com/total/country/"+handleCountry).then((res)=>{setCountryInfoDis(res.data[res.data.length - 1])}).catch((err)=>{console.log(err)})
    }
    return (
        <div>
            <p></p>
            <button onClick={countryDisplay}>Take Data</button>
            <h3>Active Case: {countryInfoDis.Active}</h3>
            <h3>Confirmed Case:{countryInfoDis.Confirmed}</h3>
            <h3>Death Case:{countryInfoDis.Deaths}</h3>
            <h3>Recovered Case:{countryInfoDis.Recovered}</h3>
            
        </div>
    )
}

export default CovidInfo
