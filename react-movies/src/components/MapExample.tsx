import React from 'react'

function MapExample() {

    const arr = Array(100).fill(0);//[0,0,0......]
  return (


    <select onChange={(e)=>{
        console.log(e.target.value);
    }}>

        {arr.map((number,index)=> <option key={index+1} value={index+1}>{index+1}</option>)}

    </select>

  )
}

export default MapExample