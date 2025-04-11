import React, { useState } from 'react'

function TodoForm({ addTodo }) {
      const [value, setValue] = useState("");
      const handleSubmit = (e) => {
            e.preventDefault();
            if (value) {
                  addTodo(value);
                  setValue("");
            }
      }
  return (
      <>
        <form onSubmit={handleSubmit} className='TodoFrom'>
            <input
                  type="text" 
                  value={value}
                  onChange={(e)=>setValue(e.target.value)}
                  className='todo-input'
                  placeholder="What is the today's task?"/>
                  
                  <button type='submit' className='todo-btn'>Add task</button>
        </form>
      </>       
  )
}

export default TodoForm