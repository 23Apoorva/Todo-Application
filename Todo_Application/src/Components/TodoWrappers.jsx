import React, { useState } from 'react'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import Todo from './Todo'

function TodoWrappers() {
      const [todos, setTodos] = useState([]);

      // add todo
      const addTodo = (todo) => {
            setTodos([
                  ...todos, { task: todo, completed: false, isEditing:false },
            ])
      }

  return (
    <div className='TodoWrapper'>
     <h1>Today's Your Tasks!</h1>
              <TodoForm addTodo={addTodo} />

              {todos.map((todo) => todo.isEditing ? (
                    <EditTodoForm/>
              ) : (
                  <Todo 
                  task={todo}/>
              )
              )}
    </div>
  )
}

export default TodoWrappers