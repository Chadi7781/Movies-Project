import React, { useEffect, useState } from 'react'

function UseEffectExamples() {

    const [clicks,setClicks] = useState(0);

    useEffect(() => {
        console.log("component loaded")

        return  () => {
            //Run before the component destroyed
            console.log('the component will be destroyed');
        }
    },[])


    useEffect(() => {
        document.title = `${clicks} times`;
    },[clicks])
  return (
  <>
    <div>UseEffectExamples</div>
  
    <div><button onClick={()=> setClicks(clicks+1)}>
        You have clicked {clicks} times</button></div>

  </>
  )
}

export default UseEffectExamples