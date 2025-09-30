import React, { useState } from 'react'


function App() {
 
  const [count, setCount] = useState(0) 

  function inc(){
    return setCount(count+1)
  }

  function dec(){
   return count > 0 ? setCount(count - 1) : setCount(0)  
  }

  let h2style= {
    backgroundColor : "red",
    color: "white",
    padding: "0.3rem 1.5rem"
  }


  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column"
    }}>
      <h2 style={h2style}>COUNTER APP</h2>

      {/* <button onClick={() => {setCount(count + 1)}}>inc</button> */}
      <button onClick={inc}>inc</button>

      <p>count {count}</p>

      <button onClick={dec}>dec</button>
      {/* <button onClick={() => { count > 0 ?  setCount(count - 1) : setCount(0)}} >dec</button> */}

    </div>
  )
}

export default App