import './App.css'
import Profile from './components/Profile'

function App() { 

  
  return (
    <>
      <div className='profiles' style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>

         <Profile name="sween khan" age="24" email="sween@gmail.com" />
         <Profile name="lokesh kumar" age="23" email="lokesh@gmail.com"/>
         <Profile name="banwar lal" age="22" email="banwar@gmail.com"/>
         <Profile name="roshan kumar" age="21" email="roshan@gmail.com"/>
         <Profile name="anjali jangid" age="20" email="anjali@gmail.com" />

         <input  type='text' placeholder='enter your name'/>

      </div>
    </>
  )
}

export default App



// function add(a, b){
//   return a+ b
// }

// add(4, 5)
// add(7, 9)
