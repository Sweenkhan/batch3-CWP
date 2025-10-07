import { useEffect, useState } from 'react'
import './App.css'


function App() {



  let [profile, setProfile] = useState({})

  // useEffect(callback, deppendcy array)

  useEffect(() => {

    function fetchData() {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((res) => {
          setProfile(res.results[0])
        })
      console.log(profile)
    }

    fetchData()


  }, [])





  return (
    <>
      <h2>UseEffect hook</h2>
      {
        profile.name ?
          <div>
            <img src={profile.picture.large} />
            <h3>{profile.name.title}  {profile.name.first} {profile.name.last} </h3>
          </div>
          : ""}

    </>
  )
}

export default App
