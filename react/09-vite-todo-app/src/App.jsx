import { useState } from 'react'

function App() {

  const [inputVal, setInputVal] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(false)
  const [editTodoIndex, setEditTodoIndex] = useState(null)



  function handleClick(e) {
    e.preventDefault()
    console.log(inputVal)

    if (editTodo === true) {
      let todoupdate = todos.map((todo, i) => {
        if (i == editTodoIndex) {
          return inputVal
        } else {
          return todo
        }
      }
      )
      setTodos(todoupdate)
      setInputVal("")
      setEditTodoIndex(null)
      setEditTodo(false)
    }

    else {
      setTodos((prev) => [...prev, inputVal])
      setInputVal("")
    }

  }


  function handleDelete(index) {
    console.log(index)
    let filterData = todos.filter((todo, i) => index !== i)
    setTodos(filterData)
  }


  function handleUpdate(index) {
    setEditTodo(true)
    setEditTodoIndex(index)
    let filterTodo = todos.filter((todo, i) => i == index)
    setInputVal(filterTodo[0])
  }

  function handleDone(index){
     
  }


  return (
    <div>
      <h2>To-DO App</h2>
      <div>

        <form action="">
          <input type='text' placeholder='Enter your todo...' onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
          <button onClick={handleClick}>{(editTodo) ? "Update-todo" : "Add"}</button>

        </form>

        <div>
          {todos.map((todo, index) => {
            return (
              <p key={index}> {todo}
                <button style={{ marginLeft: "20px" }} onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleUpdate(index)}> Edit</button>
                <button onClick={() =>handleDone(index)}>Done</button>
              </p>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default App