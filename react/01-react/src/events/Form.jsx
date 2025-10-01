import React, { useState } from 'react'

function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    function handleSubmit(e){
        e.preventDefault() 
        console.log(firstName, lastName)
        setFirstName("")
        setLastName("")
    }


    // function handleChange(e){ 
    //     setFirstName(e.target.value)
    // }


  return (
    <div>
        <h2>Create Account</h2>
        <form>
             {/* <input placeholder='enter your firstName...' type='text' onChange={handleChange} value={firstName} /> */}

             <input placeholder='enter your firstName...' type='text' onChange={(e) => setFirstName(e.target.value)}  value={firstName} />
             <input placeholder='enter your lastName...' type='text' onChange={(e) => setLastName(e.target.value)} value={lastName} />

             <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Form