import React, { useEffect, useState } from 'react'
import axios from "axios"
import Tmdb from './assets/Tmdb'


function App() {

  const [profile, setProfile] = useState([])
  const [errMessage, setErrMessage] = useState(null)

  useEffect(() =>{

    axios.get("https://randomuser.me/api/")
    .then((res) => {
        console.log(res.data.results[0])
        setProfile(res.data.results[0])
    }).catch((err) => {
        console.log(err)
        if(err.message !== undefined){
            setErrMessage(err.message)
        }
    })
  }, [])


  if(errMessage !== null) return <p>{errMessage}</p>

  return (
    <div>
      <h2>axios for api calling</h2>
        <div>
          {
        profile.name ?
          <div>
            <img src={profile.picture.large} />
            <h3>{profile.name.title}  {profile.name.first} {profile.name.last} </h3>
          </div>
          : ""}
        </div>
     
    </div>
  )
}

export default App