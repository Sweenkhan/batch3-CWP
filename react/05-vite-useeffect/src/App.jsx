  import { useState } from 'react'
import './App.css'


function App() { 

  

  let [profile , setProfile] = useState({})


  function fetchData(){

    fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((res) => {  
      setProfile(res.results[0])
      
    })
    console.log(profile)
  }
 

  return (
    <>
     <h2>UseEffect hook</h2>
     <button onClick={fetchData}>click</button>
     <div>
          {profile.gender == !undefined ?  <h3>Name {profile.name.first} </h3>: "" } 
     </div>
    </>
  )
}

export default App
