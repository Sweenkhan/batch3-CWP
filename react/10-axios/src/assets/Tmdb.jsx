import React, { useEffect } from 'react'
import axiose from "./Axios.jsx"

function Tmdb() {


    let API_KEY = "8d56a05459f7aa71f1f686ce7e65ed38";
    let url = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
    let url2 = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;


    useEffect(()=>{
        axiose.get(url)
        .then((res) => {
          console.log(res)
        })
    },[])

  return (
    <div>
        <h2>tmdb</h2>
    </div>
  )
}

export default Tmdb