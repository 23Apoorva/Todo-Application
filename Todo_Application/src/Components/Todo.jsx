import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({task}) {
  return (
      <div className='Todo'>
              <p className={`${task.complted ? "complted" : "incomplted"}`}>{task.task}</p>
      </div>
  )
}

export default Todo