import axios from 'axios';
import React from 'react'
import {useState} from 'react';


function Thumnails({handleImages,handleNumbers}) {

    const [randomImageDisplay, setRandomImageDisplay]=useState([]);
    const displayEach =()=>{
        axios.get(`https://dog.ceo/api/breed/${handleImages}/images/random/${handleNumbers}`)
        .then(res=>{setRandomImageDisplay(res.data.message)})
        .catch(err=>{console.log(err)})
    };
  return (
    <div>
        <div className="thumnails">

            

            <div className="select4" style={{marginLeft: "280px"}}>
                 <button className='buttn' onClick={displayEach}>Randomise Breed Image Display</button>
            </div>

            {randomImageDisplay.map((show)=><img src={show} alt={''}></img>)}
            
            {/* <div className="thumnails1">
                <img className="gmi" src="/img/dog.png" alt='dog0'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog1.png" alt='dog1'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog2.png" alt='dog2'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog3.png" alt='dog3'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog4.png" alt='dog4'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog5.png" alt='dog5'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog6.png" alt='dog6'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog7.png" alt='dog7'></img>
            </div>

            <div className="thumnails1">
                <img src="/img/dog8.png" alt='dog8'></img>
            </div> */}

        </div>{/* <!--close tag for thumnails--> */}
    </div>
  )
}

export default Thumnails