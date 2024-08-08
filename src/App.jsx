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
          id: currentTodos.length + 1,
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
        <li>
          <label htmlFor="">
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete </button>
        </li>
      </ul>
    </>
  )
}

export default App
