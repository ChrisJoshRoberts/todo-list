import './App.css'
import './styles.css'
import { useState } from 'react'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })
  }


  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
          placeholder='enter new item'
          id="item"
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">TodoList</h1>
      <ul className="list">
        {todos.map(todo => {
          return (
          <li key={todo.id}>
            <label htmlFor="">
              <input type="checkbox"
              checked={todo.completed}/>
              {todo.title}
            </label>
            <button className="btn btn-danger">Delete </button>
          </li>
        )
        })}
      </ul>
    </>
  )
}

export default App
