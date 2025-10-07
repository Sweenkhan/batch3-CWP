import SignUp from "./components/Sign-Up"
import LogIn from "./components/LogIn"

function App() {

  let isUserLoogedin = true
  let userName = "sween"


  if (isUserLoogedin) return (
    <> 
    <p>welocome to the website</p>

    { ( userName) && <span>{userName}</span> }         
    {/* AND operator */}
    
    </>
  )




  return (
    <>
      <LogIn />
      <SignUp />
    </>)
}

export default App
