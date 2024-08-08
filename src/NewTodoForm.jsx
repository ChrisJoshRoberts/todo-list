import { useState } from 'react'
import PropTypes from 'prop-types'

export const NewTodoForm = ({onSubmit}) => {

  const [newItem, setNewItem] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (newItem === '') return
    onSubmit(newItem)
    setNewItem(''); // clear input
  }

  return (
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
  )
}
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
