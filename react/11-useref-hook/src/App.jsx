 import React, { useRef, useState } from 'react'
import OtpAuthentication from './assets/OtpAuthentication'
 
 function App() {

  //  const [inputVal, setInputVal] = useState("")
  //  const inputRef = useRef()

  // function handleBlur(){
  //     inputRef.current.blur()
  // } 
  // function handleFocus(){
  //   inputRef.current.focus()
  // }


   return (
     <div>

      {/* <input ref={inputRef} value={inputVal} onChange={(e) => setInputVal(e.target.value)} type='text' placeholder='write your name'/>
      <button>submit</button>
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleBlur}>blur</button> */}
       <OtpAuthentication />
     </div>
   )
 }
 
 export default App