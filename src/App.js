import React from 'react'
import './App.css'

// import DogHub from './DogHub'
import CountriesDropDown from './component/CountriesDropDown'
import DropDown from './component/Exvercise/DropDown'
// import NewsInfo from './component/Exvercise/NewsInfo'







function App() {
    return (
      <div className="App">
        
         <h1> Covid19 App in React</h1>
        <CountriesDropDown />

        <h1>Covid19 App in React MyApp</h1> 
        <DropDown/>
        
        {/* <DogHub/> */}

        


      </div>
    )

}

export default App
