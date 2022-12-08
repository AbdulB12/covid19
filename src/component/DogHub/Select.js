import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Thumnails from './Thumnails';

function Select() {

    const [breedList, setBreedList] = useState([]);
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/list")
        .then(res=>{setBreedList(res.data.message)})
        .catch(err=>{console.log(err)})
    },[]);

    const [inputNumber, setInputNumber]=useState(0);
    const [images, setImages]=useState("");

    const displayNumbers=(e)=>{
        setInputNumber(e.target.value)
    }
    const displayImages=(e)=>{
        setImages(e.target.value)
    }

  return (
    <div>
<p></p>
<div className="select" style={{marginLeft: "80px"}}>

<div className="select1" style={{marginLeft: "30px"}}>
    <select  className="butt" onClick={displayImages}>
        {breedList.map((display,index)=><option key={index} value={display} className="butt"><span className="apn">Breeds{display}</span></option>)}
    </select>
</div>

<div className="select2">
    <select  className="butt">
        <option className="butt"><span className="apn">Sub-breeds</span></option>
    </select>
</div>

<div className="select3">
    <select  className="butt" onClick={displayNumbers}>
        <option className="apn" disabled>Display Number</option>
        <option value={3}>3</option>
        <option value={6}>6</option>
        <option value={9}>9</option>
        <option value={12}>12</option>
        <option value={15}>15</option>
        <option value={18}>18</option>
        <option value={21}>21</option>
        <option value={24}>24</option>
    </select>
</div>

{/* {inputNumber}<br></br>
{images} */}

<Thumnails handleImages={images} handleNumbers={inputNumber}/>
</div>{/* <!--close tag for select--> */}
    </div>
  )
}

export default Select