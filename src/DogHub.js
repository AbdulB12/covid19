import React from 'react'
import DogSnap from './component/DogHub/DogSnap'
import Footer from './component/DogHub/Footer'
import NavBar from './component/DogHub/NavBar'
import Select from './component/DogHub/Select'
import Text2 from './component/DogHub/Text2'
// import Thumnails from './component/DogHub/Thumnails'
import Text from './component/DogHub/Text'
import './DogHub.css'



function DogHub() {
  return (
    <div>
        <NavBar/>
        <DogSnap/>
        <Text/>
        <Select/>
        <Text2/>
        {/* <Thumnails/> */}
        <Footer/>
    </div>
  )
}

export default DogHub