 import { useState } from 'react'
 
 function App() {

  const [inputVal, setInputVal] = useState("")
  const [todos, setTodos] = useState([])

  function handleClick(e){

     e.preventDefault()
       console.log(inputVal)
       setTodos((prev) => [...prev, inputVal])
       setInputVal("")
  }

  function handleDelete(i){
     console.log(i)
    let filterData =  todos.filter((todo, index) => index !== i)

    setTodos(filterData)
  }


   return (
     <div>
      <h2>To-DO App</h2>
      <div>

        <form action="">  
        <input type='text' placeholder='Enter your todo...' onChange={(e) => setInputVal(e.target.value)} value={inputVal}/>
        <button onClick={handleClick}>Add</button>

        </form>

        <div> 
             {todos.map((todo, index) => {
                  return(
                    <p key={index}> {todo} <button style={{marginLeft:"20px"}} onClick={ () =>handleDelete(index)}>delete</button> </p>
                  )
             })}
        </div>

      </div>
     </div>
   )
 }
 
 export default App