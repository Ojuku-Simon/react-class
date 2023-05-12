import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Todo = ({task, toggleComplete, deleteTodo, editToDo}) => {
  return (
    <div className='Todo'>
          <p onClick={() => toggleComplete(task.id) } className={`${task.completed ? 'complete':""}`}>{task.task }</p>
          <div>
              <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} />  
               <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />  
          </div>
    </div>
  )
}

export default Todo
