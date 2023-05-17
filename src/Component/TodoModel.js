import React from 'react'
import { useDispatch } from 'react-redux'
import { Done_Task } from './JS/Actions'

const TodoModel = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <p>{task.text}</p>
        <button onClick={()=> dispatch(Done_Task(task.id))}>{task.isDone ? 'unDone' : 'Done'}</button>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}
export default TodoModel