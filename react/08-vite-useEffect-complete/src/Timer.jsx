import React, { useEffect, useState } from 'react'

function Timer() {
 
    const [time, setTime] = useState(null)


    useEffect(() => {

    let intervalID = setInterval(() => {
    let now = new Date().toLocaleTimeString()
    setTime(now)
    console.log(now)
    }, 1000);

    return () => {
        clearInterval(intervalID)
    }
    }, [])


  return (
    <div>
        <p>{time}</p>

    </div>
  )
}

export default Timer